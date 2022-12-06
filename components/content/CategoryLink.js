import Link from "next/link";

export default function CategoryLink({ route, active, index }) {
  return (
    <>
      <Link
        href={`/category/${route}/1`}
        className={`nav__link ${active == route.toLowerCase() ? "active" : ""}`}
        key={index}
      >
        {route}
      </Link>
    </>
  );
}
