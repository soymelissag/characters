/**
 * Floating decorations that drift around behind the scrapbook: two hand-drawn
 * props (the paint palette and coffee cup) plus a star and heart sticker. All
 * are purely decorative and ignore pointer events (set in CSS).
 */
export default function Decorations() {
  return (
    <>
      <img
        className="deco deco-img deco-palette"
        src="/palette.png"
        alt=""
        aria-hidden="true"
      />

      <svg
        className="deco deco-star-1"
        viewBox="0 0 100 100"
        filter="url(#sticker-outline)"
        aria-hidden="true"
      >
        <polygon
          points="50,5 61,35 95,35 68,55 78,85 50,65 22,85 32,55 5,35 39,35"
          fill="#FFD166"
        />
      </svg>

      <svg
        className="deco deco-heart"
        viewBox="0 0 100 100"
        filter="url(#sticker-outline)"
        aria-hidden="true"
      >
        <path
          d="M50 85 C50 85, 10 55, 10 30 C10 15, 25 5, 40 15 C50 22, 50 22, 50 22 C50 22, 50 22, 60 15 C75 5, 90 15, 90 30 C90 55, 50 85, 50 85 Z"
          fill="#FF7A29"
        />
      </svg>

      <img
        className="deco deco-img deco-coffee"
        src="/coffee.png"
        alt=""
        aria-hidden="true"
      />
    </>
  );
}
