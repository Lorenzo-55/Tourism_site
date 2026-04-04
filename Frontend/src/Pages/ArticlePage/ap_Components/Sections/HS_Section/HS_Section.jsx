import HorizontalScrollCards from "../../../../../Components/HorizontalScrollCards/HorizontalScrollCards.jsx";

export default function HorizontalScrollSection({ section }) {
  return (
    <HorizontalScrollCards
      items={section.items}
      kicker={section.kicker}
      title={section.title}
      text={section.text}
      collapsible={section.collapsible}
      defaultOpen={section.defaultOpen}
      toggleLabelOpen={section.toggleLabelOpen}
      toggleLabelClose={section.toggleLabelClose}
      align={section.align}
      sectionClassName={section.className}
      titleStyle={section.titleStyle}
    />
  );
}