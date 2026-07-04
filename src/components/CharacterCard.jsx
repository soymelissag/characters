/**
 * A single adoptable-sprite sticker card: illustration, name and description,
 * with optional washi tape or a "New!" badge layered on top.
 */
export default function CharacterCard({ name, description, className, Art, badge, tape }) {
  return (
    <div className={`character-card sticker ${className}`}>
      {badge && <div className="badge">{badge}</div>}
      {tape && <div className={`tape ${tape}`} />}
      <div className="character-art">
        <Art />
      </div>
      <h2 className="character-name">{name}</h2>
      <p className="character-desc">{description}</p>
    </div>
  );
}
