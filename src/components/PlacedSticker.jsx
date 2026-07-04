/**
 * A single sticker the user has stamped onto the page by clicking. Position,
 * size, rotation and which little SVG doodle it shows are all decided once at
 * creation time (see StickerBook) and passed in here.
 */
export default function PlacedSticker({ x, y, size, rotation, svg }) {
  return (
    <div
      className="placed-sticker"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        '--rand-rot': rotation,
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
