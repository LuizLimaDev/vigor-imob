import Image from "next/image";

export type TProps = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

const QualitiesCard = ({ src, alt, title, text }: TProps) => {
  return (
    <div className="flex w-[252px] flex-col items-center justify-center gap-2">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="h-[6.25rem] w-[6.25rem]"
      />
      <h1 className="font-poppins text-xl font-bold">{title}</h1>
      <p className="mt-2 text-center text-xs font-light">{text}</p>
    </div>
  );
};

export default QualitiesCard;
