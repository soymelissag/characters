/**
 * A single character sticker card: hand-drawn artwork, name and description,
 * with optional washi tape or a "New!" badge layered on top.
 */
export default function CharacterCard({ name, description, className, image, badge, tape }) {
  return (
    <div className={`character-card sticker ${className}`}>
      {badge && <div className="badge">{badge}</div>}
      {tape && <div className={`tape ${tape}`} />}
      <div className="character-art">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <h2 className="character-name">{name}</h2>
      <p className="character-desc">{description}</p>
    </div>
  );
}
