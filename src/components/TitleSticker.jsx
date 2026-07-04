/**
 * The header: the hand-drawn "Squirrel on the Swing" banner, with a small
 * tagline pill inviting the visitor to stamp the page.
 */
export default function TitleSticker() {
  return (
    <div className="header-section">
      <img className="title-banner" src="/title-squirrel.png" alt="Squirrel on the Swing" />
      <p className="title-tagline">Click anywhere to leave a mark ✧</p>
    </div>
  );
}
