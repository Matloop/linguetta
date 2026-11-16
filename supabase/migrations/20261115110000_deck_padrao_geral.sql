-- O deck padrão do idioma passa a se chamar "Geral" (antes "Minhas palavras").
-- Renomeia o deck padrão existente e troca o nome usado ao criar um novo.

update public.decks set name = 'Geral'
  where is_default and name = 'Minhas palavras';

create or replace function public.ensure_default_deck(p_user uuid, p_language public.language_code) returns uuid
  language plpgsql security definer set search_path = '' as $$
declare
  v_id uuid;
begin
  select d.id into v_id from public.decks d
    where d.user_id = p_user and d.language = p_language and d.is_default;
  if v_id is not null then return v_id; end if;
  insert into public.decks (user_id, language, name, is_default)
  values (p_user, p_language, 'Geral', true)
  on conflict (user_id, language) where is_default do nothing
  returning id into v_id;
  if v_id is null then
    select d.id into v_id from public.decks d
      where d.user_id = p_user and d.language = p_language and d.is_default;
  end if;
  return v_id;
end;
$$;
