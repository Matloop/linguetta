-- Ícone do baralho (opcional), escolhido entre os ícones do app; aparece na lista e na sidebar.
alter table public.decks
  add column icon text check (icon in (
    'book', 'music', 'tv', 'globe', 'leaf', 'sparks', 'bookmark', 'folder', 'cards',
    'quote', 'note', 'home', 'clock', 'calendar', 'image', 'chart', 'sound', 'user'
  ));

grant update (icon) on public.decks to authenticated;
