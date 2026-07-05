/**
 * The header: the hand-drawn "westofchester's world of characters" ribbon as
 * the title, with a small tagline inviting the visitor to stamp the page.
 */
export default function TitleSticker() {
  return (
    <div className="header-section">
      <img
        className="title-banner"
        src="/title-sign.png"
        alt="westofchester's world of characters"
      />
      <p className="title-tagline">Click anywhere to leave a mark ✧</p>
    </div>
  );
}
