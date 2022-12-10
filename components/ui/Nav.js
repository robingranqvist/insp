import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import logo__flower from "@/assets/logo/logo__flower.svg";

export default function Nav() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".marquee",
          scrub: true,
          start: "top 50%",
          end: "bottom -50%",
        },
      })
      .fromTo(
        ".nav__logo",
        {
          rotation: 0,
        },
        {
          rotation: 360,
        }
      );
  }, []);

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
