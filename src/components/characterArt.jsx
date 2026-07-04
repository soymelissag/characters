/**
 * The four hand-built character illustrations, each as a self-contained SVG
 * component. They fill their `.character-art` wrapper (sized in CSS) and use
 * the shared CSS custom properties for their palette.
 */

export function PommyArt() {
  return (
    <svg viewBox="0 0 200 200">
      {/* Fluffy cloud body built from overlapping circles */}
      <g fill="var(--orange-main)">
        <circle cx="100" cy="110" r="65" />
        <circle cx="60" cy="80" r="30" />
        <circle cx="140" cy="80" r="30" />
        <circle cx="50" cy="130" r="25" />
        <circle cx="150" cy="130" r="25" />
        <circle cx="80" cy="160" r="25" />
        <circle cx="120" cy="160" r="25" />
        <circle cx="100" cy="50" r="35" />
      </g>
      {/* Leaf sprout */}
      <path
        d="M100 50 C80 20, 130 10, 140 40 C140 40, 120 55, 100 50 Z"
        fill="var(--green)"
      />
      {/* Eyes */}
      <circle cx="75" cy="105" r="8" className="illo-eye" />
      <circle cx="125" cy="105" r="8" className="illo-eye" />
      {/* Eye highlights */}
      <circle cx="72" cy="102" r="3" className="illo-white" />
      <circle cx="122" cy="102" r="3" className="illo-white" />
      {/* Smile */}
      <path
        d="M90 120 Q100 130 110 120"
        fill="none"
        stroke="var(--text-dark)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Blush */}
      <ellipse cx="60" cy="115" rx="12" ry="8" className="illo-blush" />
      <ellipse cx="140" cy="115" rx="12" ry="8" className="illo-blush" />
    </svg>
  );
}

export function JuicyArt() {
  return (
    <svg viewBox="0 0 200 200">
      {/* Ground shadow */}
      <polygon points="50,170 150,170 130,180 70,180" fill="rgba(0,0,0,0.05)" />
      {/* Carton body */}
      <rect x="50" y="60" width="100" height="110" rx="5" fill="var(--orange-light)" />
      {/* Carton top face */}
      <polygon points="50,60 70,30 170,30 150,60" fill="var(--white)" />
      {/* Carton side face */}
      <polygon points="150,60 170,30 170,140 150,170" fill="var(--orange-main)" />
      {/* Orange slice motif */}
      <circle cx="100" cy="120" r="25" fill="var(--orange-main)" />
      <circle cx="100" cy="120" r="18" fill="var(--white)" />
      <path
        d="M100 120 L100 102 M100 120 L118 120 M100 120 L100 138 M100 120 L82 120 M100 120 L113 107 M100 120 L113 133 M100 120 L87 133 M100 120 L87 107"
        stroke="var(--orange-main)"
        strokeWidth="3"
      />
      {/* Straw */}
      <path
        d="M100 45 L100 10 L130 10"
        fill="none"
        stroke="var(--yellow)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Face */}
      <circle cx="85" cy="85" r="5" className="illo-eye" />
      <circle cx="115" cy="85" r="5" className="illo-eye" />
      <path
        d="M95 90 Q100 95 105 90"
        fill="none"
        stroke="var(--text-dark)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GoldieArt() {
  return (
    <svg viewBox="0 0 200 200">
      {/* Tail */}
      <path
        d="M150 100 C180 70, 190 120, 190 100 C190 80, 180 130, 150 100 Z"
        fill="var(--orange-light)"
      />
      <path d="M140 100 C180 40, 170 160, 140 100 Z" fill="var(--orange-main)" />
      {/* Fins */}
      <path d="M90 60 C110 30, 130 40, 110 60 Z" fill="var(--orange-light)" />
      <path d="M90 140 C110 170, 130 160, 110 140 Z" fill="var(--orange-light)" />
      {/* Body */}
      <ellipse cx="90" cy="100" rx="60" ry="45" fill="var(--orange-main)" />
      {/* Eye */}
      <circle cx="50" cy="90" r="8" className="illo-eye" />
      <circle cx="48" cy="88" r="3" className="illo-white" />
      {/* Mouth */}
      <circle cx="30" cy="110" r="6" fill="var(--text-dark)" />
      <circle cx="30" cy="110" r="3" fill="#FF6B6B" />
      {/* Blush */}
      <ellipse cx="65" cy="105" rx="10" ry="6" className="illo-blush" />
      {/* Bubbles */}
      <circle cx="30" cy="50" r="5" fill="var(--white)" opacity="0.6" />
      <circle cx="20" cy="30" r="8" fill="var(--white)" opacity="0.6" />
    </svg>
  );
}

export function FlantasticArt() {
  return (
    <svg viewBox="0 0 200 200">
      {/* Plate */}
      <ellipse
        cx="100"
        cy="160"
        rx="70"
        ry="20"
        fill="var(--white)"
        stroke="#E0D5C1"
        strokeWidth="4"
      />
      {/* Flan body */}
      <path d="M50 150 Q50 80 80 60 L120 60 Q150 80 150 150 Z" fill="var(--yellow)" />
      {/* Caramel drizzle */}
      <path
        d="M78 62 C70 80, 85 90, 90 75 C95 95, 110 95, 115 80 C120 90, 130 80, 122 62 C110 55, 90 55, 78 62 Z"
        fill="var(--orange-main)"
      />
      <ellipse cx="100" cy="60" rx="20" ry="8" fill="var(--orange-main)" />
      {/* Face */}
      <path
        d="M80 110 Q85 105 90 110"
        fill="none"
        stroke="var(--text-dark)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M110 110 Q115 105 120 110"
        fill="none"
        stroke="var(--text-dark)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M95 125 Q100 135 105 125"
        fill="none"
        stroke="var(--text-dark)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Blush */}
      <ellipse cx="75" cy="120" rx="10" ry="6" className="illo-blush" />
      <ellipse cx="125" cy="120" rx="10" ry="6" className="illo-blush" />
    </svg>
  );
}
