/**
 * Global SVG <defs> holding the "sticker-outline" filter used by the floating
 * decorations to give them a thick white die-cut sticker border.
 */
export default function SvgFilters() {
  return (
    <svg className="svg-filters" aria-hidden="true">
      <defs>
        <filter id="sticker-outline">
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="3"
            result="DILATED"
          />
          <feFlood floodColor="white" result="WHITE" />
          <feComposite in="WHITE" in2="DILATED" operator="in" result="OUTLINE" />
          <feMerge>
            <feMergeNode in="OUTLINE" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
