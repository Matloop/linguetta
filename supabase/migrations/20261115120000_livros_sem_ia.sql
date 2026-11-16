-- O blend de livro deixa de usar IA: as candidatas vêm de um léxico estático e o livro sai
-- numa só chamada. Sem candidatas por capítulo, sem progresso e sem retomada: book_chapters
-- volta a ser só o índice (título e palavras) para escolher o intervalo.

drop policy "dono edita os capítulos" on public.book_chapters;
revoke update on public.book_chapters from authenticated;
drop trigger book_chapters_touch on public.book_chapters;

alter table public.book_chapters
  drop column status,
  drop column candidates,
  drop column error,
  drop column updated_at;
