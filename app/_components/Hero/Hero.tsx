import Image from "next/image";

export type TProps = {
  src: string;
  alt: string;
  title: string;
};

const Hero = ({ src, alt, title }: TProps) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="min-h-[11.5rem] w-full"
      />
      <h1 className="absolute left-[50%] top-[50%] w-full -translate-x-1/2 -translate-y-1/2 text-center font-archivo text-2xl font-bold uppercase text-VIprimary-color drop-shadow-VI-1">
        {title}
      </h1>
    </div>
  );
};

export default Hero;
