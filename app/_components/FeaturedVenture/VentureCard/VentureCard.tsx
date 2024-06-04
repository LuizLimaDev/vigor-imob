import Image from "next/image";
import Link from "next/link";

export type TProps = {
  id: number;
  src: string;
  title: string;
};

const VentureCard = ({ id, src, title }: TProps) => {
  return (
    <Link
      href={`/properties/${id - 1}`}
      className="relative flex items-center justify-center"
    >
      <Image
        src={src}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className=" min-h-[7.375rem] min-w-[13.187rem] opacity-[70%]"
      />

      <h1
        className="
          absolute font-alegreya text-lg font-bold uppercase text-VIprimary-color drop-shadow-VI-1
        "
      >
        {title}
      </h1>
    </Link>
  );
};

export default VentureCard;
