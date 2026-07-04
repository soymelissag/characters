import {
  PommyArt,
  JuicyArt,
  GoldieArt,
  FlantasticArt,
} from '../components/characterArt.jsx';

/**
 * Data for each adoptable sprite. `className` positions the card on the
 * scrapbook grid, and an optional `badge` or `tape` decoration is layered on
 * top exactly as in the original design.
 */
export const characters = [
  {
    id: 'pommy',
    name: 'Pommy',
    description:
      'A highly energetic bundle of zest. Rolls everywhere instead of walking.',
    className: 'char-1',
    Art: PommyArt,
    badge: 'New!',
  },
  {
    id: 'juicy',
    name: 'Juicy',
    description:
      'Always 100% concentrated. Tends to spill secrets when squeezed.',
    className: 'char-2',
    Art: JuicyArt,
    tape: 'tape-2',
  },
  {
    id: 'goldie',
    name: 'Goldie',
    description: 'Memory span of 3 seconds, but makes every moment count.',
    className: 'char-3',
    Art: GoldieArt,
    tape: 'tape-3',
  },
  {
    id: 'flantastic',
    name: 'Flantastic',
    description: 'Jiggles when happy. Has a sweet disposition and a caramel hat.',
    className: 'char-4',
    Art: FlantasticArt,
  },
];
