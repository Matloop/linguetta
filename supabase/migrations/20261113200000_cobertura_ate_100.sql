-- Livros: a parte das palavras trocadas vai de 0 a 100% (antes 0–50%).
alter table public.books drop constraint books_coverage_check;
alter table public.books add constraint books_coverage_check check (coverage between 0 and 1);
