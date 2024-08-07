"use client";

import { filterPropertiesAllotment } from "@/app/actions/actions";
import Image from "next/image";

export type TProps = {
  title: string;
};

const VentureCard = ({ title }: TProps) => {
  const params = title;

  function handleClick() {
    if (params === "Em breve...") {
      return;
    }
    filterPropertiesAllotment(params);
  }

  return (
    <div
      className="flex min-h-[8rem] min-w-[8rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-[.5rem] border-[.125rem] border-VIprimary-color"
      onClick={() => handleClick()}
    >
      <Image
        src="/Icons/house.svg"
        alt="empreendimento em destaque"
        width={45}
        height={45}
      />

      <h1
        className="
          font-archivo text-xs font-bold uppercase text-VIprimary-color"
      >
        {title}
      </h1>
    </div>
  );
};

export default VentureCard;
