import { useCallback, useEffect, useState } from 'react';
import './StickerBook.css';
import SvgFilters from './SvgFilters.jsx';
import Decorations from './Decorations.jsx';
import TitleSticker from './TitleSticker.jsx';
import CharacterCard from './CharacterCard.jsx';
import PlacedSticker from './PlacedSticker.jsx';
import { characters } from '../data/characters.js';

/** Little doodles the user can stamp onto the page. */
const STAMP_SVGS = [
  `<svg viewBox="0 0 100 100"><path d="M50 20 C60 0, 90 0, 80 30 C100 40, 100 70, 70 80 C60 100, 30 100, 20 70 C0 60, 0 30, 30 20 Z" fill="#FF7A29"/><circle cx="50" cy="50" r="15" fill="#FFD166"/></svg>`,
  `<svg viewBox="0 0 100 100"><polygon points="50,5 61,35 95,35 68,55 78,85 50,65 22,85 32,55 5,35 39,35" fill="#FFD166"/></svg>`,
  `<svg viewBox="0 0 100 100"><path d="M50 85 C50 85, 10 55, 10 30 C10 15, 25 5, 40 15 C50 22, 50 22, 50 22 C50 22, 50 22, 60 15 C75 5, 90 15, 90 30 C90 55, 50 85, 50 85 Z" fill="#FF7A29"/></svg>`,
  `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#8FD6A4"/><circle cx="30" cy="40" r="5" fill="#5C3D2E"/><circle cx="70" cy="40" r="5" fill="#5C3D2E"/><path d="M40 65 Q50 75 60 65" fill="none" stroke="#5C3D2E" stroke-width="4" stroke-linecap="round"/></svg>`,
];

export default function StickerBook() {
  const [placedStickers, setPlacedStickers] = useState([]);

  const handleStamp = useCallback((e) => {
    // Clicking on an existing sticker card should not drop a doodle.
    if (e.target.closest('.sticker')) return;

    setPlacedStickers((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 0,
        x: e.pageX,
        y: e.pageY,
        svg: STAMP_SVGS[Math.floor(Math.random() * STAMP_SVGS.length)],
        rotation: Math.floor(Math.random() * 60) - 30,
        size: Math.floor(Math.random() * 20) + 30,
      },
    ]);
  }, []);

  // Listen on the whole document so a click anywhere leaves a mark, matching
  // the original vanilla implementation.
  useEffect(() => {
    document.addEventListener('click', handleStamp);
    return () => document.removeEventListener('click', handleStamp);
  }, [handleStamp]);

  return (
    <>
      <SvgFilters />
      <Decorations />

      <main className="scrapbook" id="canvas">
        <TitleSticker />
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </main>

      {placedStickers.map((sticker) => (
        <PlacedSticker key={sticker.id} {...sticker} />
      ))}
    </>
  );
}
