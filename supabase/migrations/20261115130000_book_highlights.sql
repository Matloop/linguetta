-- Grifos e notas do leitor web. O trecho é achado de novo pelo texto (quote + contexto), não
-- por CFI: gerar o livro de novo muda os elementos (links do blend) mas não o texto.

create table public.book_highlights (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null,
  user_id uuid not null,
  spine integer not null check (spine >= 0),
  quote text not null check (length(quote) between 1 and 2000),
  prefix text not null default '' check (length(prefix) <= 64),
  suffix text not null default '' check (length(suffix) <= 64),
  chapter text not null default '' check (length(chapter) <= 200),
  percent real not null default 0 check (percent between 0 and 100),
  color text not null default 'amarelo' check (color in ('amarelo', 'verde', 'azul', 'rosa')),
  note text not null default '' check (length(note) <= 4000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  foreign key (book_id, user_id) references public.books (id, user_id) on delete cascade
);

create index book_highlights_book_idx on public.book_highlights (book_id, spine);

create trigger book_highlights_touch before update on public.book_highlights
  for each row execute function public.touch_updated_at();

alter table public.book_highlights enable row level security;
revoke all on public.book_highlights from anon, authenticated;
grant select, insert, delete on public.book_highlights to authenticated;
grant update (color, note) on public.book_highlights to authenticated;

create policy "dono lê os grifos" on public.book_highlights
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "dono cria grifos" on public.book_highlights
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "dono edita grifos" on public.book_highlights
  for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "dono apaga grifos" on public.book_highlights
  for delete to authenticated using ((select auth.uid()) = user_id);
