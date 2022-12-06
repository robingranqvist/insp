import { ButtonRound } from "@/components/index";

export default function CardContent({ item }) {
  return (
    <div className="card__content">
      <h2 className="card__title">{item.frontmatter.title}</h2>
      <ButtonRound />
    </div>
  );
}
