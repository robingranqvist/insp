import Link from "next/link";

import CardThumbnail from "./CardThumbnail";
import CardContent from "./CardContent";

export default function Card({ item }) {
  return (
    <div className="card">
      <Link
        href={item.frontmatter.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <CardThumbnail item={item} />
        <CardContent item={item} />
      </Link>
    </div>
  );
}
