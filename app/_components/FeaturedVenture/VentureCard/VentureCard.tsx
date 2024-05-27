import Image from "next/image";

export type TProps = {
  image: string;
  name: string;
};

const VentureCard = ({ image, name }: TProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src={image}
        alt={name}
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
        {name}
      </h1>
    </div>
  );
};

export default VentureCard;
