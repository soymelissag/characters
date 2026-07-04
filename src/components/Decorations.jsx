/**
 * The four floating, sticker-outlined decorations that drift around behind the
 * scrapbook. Purely decorative, so they ignore pointer events (set in CSS).
 */
export default function Decorations() {
  return (
    <>
      <svg
        className="deco deco-flower-1"
        viewBox="0 0 100 100"
        filter="url(#sticker-outline)"
        aria-hidden="true"
      >
        <path
          d="M50 20 C60 0, 90 0, 80 30 C100 40, 100 70, 70 80 C60 100, 30 100, 20 70 C0 60, 0 30, 30 20 Z"
          fill="#FF7A29"
        />
        <circle cx="50" cy="50" r="15" fill="#FFD166" />
      </svg>

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

      <svg
        className="deco deco-flower-2"
        viewBox="0 0 100 100"
        filter="url(#sticker-outline)"
        aria-hidden="true"
      >
        <path
          d="M50 15 C65 -5, 105 15, 85 40 C110 60, 90 100, 60 85 C40 110, 0 90, 15 60 C-10 40, 10 0, 40 15 Z"
          fill="#8FD6A4"
        />
        <circle cx="50" cy="50" r="12" fill="#FFFFFF" />
      </svg>
    </>
  );
}
