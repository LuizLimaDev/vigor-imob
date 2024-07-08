import Image from "next/image";
import Link from "next/link";

export type TProps = {
  title: string;
};

const VentureCard = ({ title }: TProps) => {
  return (
    <Link
      href={`/properties/${title}`}
      className="flex min-h-[8rem] min-w-[8rem] flex-col items-center justify-center gap-2 rounded-[.5rem] border-[.125rem] border-VIprimary-color"
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
    </Link>
  );
};

export default VentureCard;
