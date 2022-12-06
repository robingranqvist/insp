import Image from "next/image";

import icon__northeast from "@/assets/icons/icon__north-east.svg";

export default function ButtonRound() {
  return (
    <div className="card__button">
      <Image src={icon__northeast} className="card__button--icon" />
    </div>
  );
}
