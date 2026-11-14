-- Curso (método Assimil): lições diárias com conteúdo estático no código
-- (apps/web/src/lib/curso). Aqui fica só o progresso de cada usuário.
--
--   1. Uma linha por lição concluída ('licao') e por lição refeita na segunda onda ('onda').
--      Refazer uma lição já feita não grava de novo.
--   2. study_day é o dia de estudo (fuso e virada do usuário) em que a lição foi feita.
--      A regra "uma lição nova por dia" é conferida no servidor do app antes de gravar.
--   3. Palavra guardada numa lição: obra 'curso' (refs.path = 'curso:<curso>:<lição>') e
--      encontro de origem 'curso'.

create table public.course_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_id text not null check (course_id ~ '^[a-z0-9-]{1,40}$'),
  lesson_no integer not null check (lesson_no between 0 and 999),
  kind text not null default 'licao' check (kind in ('licao', 'onda')),
  study_day date not null,
  -- Segunda onda: índices das falas em que a pessoa travou.
  stuck smallint[] not null default '{}' check (cardinality(stuck) <= 200),
  completed_at timestamptz not null default now(),
  primary key (user_id, course_id, kind, lesson_no)
);

alter table public.course_progress enable row level security;
revoke all on public.course_progress from anon, authenticated;
grant select, insert on public.course_progress to authenticated;

create policy "dono lê o próprio progresso" on public.course_progress
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "dono grava o próprio progresso" on public.course_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);

-- ---------- Obra e encontro do curso ----------

alter table public.works drop constraint works_kind_check;
alter table public.works add constraint works_kind_check
  check (kind in ('livro', 'episodio', 'filme', 'musica', 'video', 'album', 'curso'));

alter table public.encounters drop constraint encounters_origin_check;
alter table public.encounters add constraint encounters_origin_check
  check (origin in ('manual', 'stremio', 'musica', 'ereader', 'anki', 'blend', 'leitor', 'curso'));
