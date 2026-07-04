/**
 * Data for each character in the sticker book. Each entry points at one of the
 * hand-drawn artworks in /public and positions its card on the scrapbook grid.
 * An optional `badge` or `tape` decoration is layered on top.
 *
 * Names and descriptions are easy to tweak — edit them right here.
 */
export const characters = [
  {
    id: 'nacho',
    name: 'Nacho',
    description:
      'A very long, very loyal sausage dog. Convinced every lap is his rightful throne.',
    image: '/dachshund.png',
    className: 'char-1',
    badge: 'New!',
  },
  {
    id: 'sunny',
    name: 'Sunny',
    description:
      'Wears shades rain or shine. Radiates warmth and mildly unsolicited optimism.',
    image: '/sunny.png',
    className: 'char-2',
    tape: 'tape-2',
  },
  {
    id: 'mila',
    name: 'Mila',
    description:
      'Greets everyone with arms wide open. Collects red glasses and good days.',
    image: '/girl.png',
    className: 'char-3',
    tape: 'tape-3',
  },
  {
    id: 'biscuit',
    name: 'Professor Biscuit',
    description:
      'A scholarly tabby in blue spectacles. Judges your book choices in silence.',
    image: '/cat.png',
    className: 'char-4',
  },
];
