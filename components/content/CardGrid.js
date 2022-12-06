import Card from "./card/Card";

export default function CardGrid({ items }) {
  return (
    <div className="container">
      <div className="card__grid">
        {items.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
