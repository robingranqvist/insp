import Image from "next/image";

import icon__open from "@/assets/icons/icon__open-new.svg";

export default function CardToolTip({ url }) {
  return (
    <div className="card__tooltip-wrapper">
      <div className="card__tooltip">
        <Image src={icon__open} className="card__tooltip--icon" />
        {url}
      </div>
    </div>
  );
}
