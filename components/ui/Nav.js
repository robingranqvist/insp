import Link from "next/link";
import Image from "next/image";

import logo__flower from "@/assets/logo/logo__flower.svg";

export default function Nav() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav__item is--left">
          <Link href="#" className="nav__brand">
            Design inspiration
          </Link>
        </div>
        <div className="nav__item is--mid">
          <Image src={logo__flower} className="nav__logo" />
        </div>
        <div className="nav__item is--right">
          <Link href="#" className="nav__a">
            by Robin
          </Link>
        </div>
      </nav>
    </div>
  );
}
