/**
 * The header: the "westofchester's world" title pill, held down by a strip of
 * washi tape, with a small tagline inviting the visitor to stamp the page.
 */
export default function TitleSticker() {
  return (
    <div className="header-section">
      <div className="title-sticker sticker">
        <div className="tape tape-1" />
        <h1>westofchester&rsquo;s world</h1>
      </div>
      <p className="title-tagline">Click anywhere to leave a mark ✧</p>
    </div>
  );
}
