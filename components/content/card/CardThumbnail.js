import CardToolTip from "./CardToolTip";

export default function CardThumbnail({ item }) {
  return (
    <div className="card__thumbnail-wrapper">
      <div className="card__thumbnail--shadow"></div>
      <CardToolTip url={"/insp" + item.frontmatter.url__pretty} />

      <img
        src={item.frontmatter.thumbnail}
        className="card__thumbnail"
        alt={item.frontmatter.title}
      />
    </div>
  );
}
