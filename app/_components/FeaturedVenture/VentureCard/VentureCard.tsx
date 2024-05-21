import Image from "next/image";

export type TProps = {
  image: string;
  name: string;
};

const VentureCard = ({ image, name }: TProps) => {
  return (
    <div className="over relative flex items-center justify-center">
      <Image
        src={image}
        alt={name}
        width={0}
        height={0}
        sizes="100vw"
        className=" min-h-[118px] min-w-[211px] opacity-[70%]"
      />

      <h1
        className="
          drop-shadow-VI-1 absolute font-alegreya text-lg font-bold uppercase text-VIprimary-color
        "
      >
        {name}
      </h1>
    </div>
  );
};

export default VentureCard;
