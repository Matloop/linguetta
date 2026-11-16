-- Consulta de dicionário no contexto (POST /palavras/consultar): cache compartilhado
-- entre usuários das respostas da IA.
--
--   1. key é o sha256 em hex de (idioma, língua nativa, texto normalizado, frase, linha
--      anterior, linha seguinte, translateSentence), calculado no servidor do app
--      (lib/server/lookup.ts). result é o JSON devolvido ao cliente.
--   2. O cliente não lê nem grava a tabela: só o servidor, pelas funções abaixo, com a
--      sessão do usuário. O servidor revalida o result lido antes de usar.

create table public.dictionary_lookups (
  key text primary key check (key ~ '^[0-9a-f]{64}$'),
  result jsonb not null check (jsonb_typeof(result) = 'object' and pg_column_size(result) <= 8192),
  created_at timestamptz not null default now()
);

alter table public.dictionary_lookups enable row level security;
revoke all on public.dictionary_lookups from anon, authenticated;

create function public.dictionary_lookup_get(p_key text) returns jsonb
  language sql stable security definer set search_path = '' as $$
  select l.result from public.dictionary_lookups l where l.key = p_key;
$$;

-- A primeira resposta guardada vale; outra igual chegando junto não sobrescreve.
create function public.dictionary_lookup_put(p_key text, p_result jsonb) returns void
  language plpgsql volatile security definer set search_path = '' as $$
begin
  if auth.uid() is null then raise exception 'not_authenticated'; end if;
  insert into public.dictionary_lookups (key, result) values (p_key, p_result)
    on conflict (key) do nothing;
end;
$$;

revoke all on function public.dictionary_lookup_get(text) from public, anon;
revoke all on function public.dictionary_lookup_put(text, jsonb) from public, anon;
grant execute on function public.dictionary_lookup_get(text) to authenticated;
grant execute on function public.dictionary_lookup_put(text, jsonb) to authenticated;
