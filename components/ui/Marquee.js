import { useEffect } from "react";

export default function Marquee({ text }) {
  useEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".marquee",
          scrub: true,
          start: "top 50%",
          end: "bottom -50%",
        },
      })
      .fromTo(
        ".marquee",
        {
          x: "-10vw",
        },
        {
          x: "10vw",
        }
      );
  }, []);

  return (
    <div className="marquee__wrapper">
      <div className="marquee">
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
        <div className="marquee__item dot">•</div>
        <div className="marquee__item">{text}</div>
      </div>
    </div>
  );
}
