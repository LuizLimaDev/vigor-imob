import Image from "next/image";

export type TProps = {
  src: string;
  alt: string;
  name: string;
  description: string;
  creci: string;
};

const BrokerCard = ({ src, alt, name, description, creci }: TProps) => {
  return (
    <div className="flex w-[15.625rem] flex-col items-center justify-center rounded-[.625rem]">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="h-[13.562rem] w-[15.625rem] rounded-t-[.625rem]"
      />
      <div className="flex min-h-[6rem] min-w-[15.625rem] flex-col items-center justify-center bg-VIprimary-color px-4 pt-3 text-justify text-VIligth-color">
        <h3 className="mb-2 self-start font-poppins text-lg">{name}</h3>
        <p className="mb-2 self-start font-poppins text-sm font-light">
          {description}
        </p>
      </div>
      <div className="flex w-full gap-2 rounded-b-[.625rem] bg-VIsecondary-color py-3 pl-4 font-poppins text-sm font-light uppercase text-VIligth-color">
        <Image src="/Icons/creci.svg" alt="creci" width={14} height={10} />
        <p>creci</p>
        <p>{creci}</p>
      </div>
    </div>
  );
};

export default BrokerCard;
