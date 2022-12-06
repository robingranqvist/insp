import Link from "next/link";
import CategoryLink from "./CategoryLink";

export default function Categories({ active }) {
  const routes = ["minimal", "saas", "portfolio", "blog"];

  return (
    <div className="container is--sticky">
      <div className="nav__categories">
        <Link
          href="/"
          className={`nav__link ${active == "all" ? "active" : ""}`}
        >
          All
        </Link>

        {routes.map((route, index) => {
          return <CategoryLink route={route} active={active} index={index} />;
        })}
      </div>
    </div>
  );
}
