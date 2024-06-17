import Image from "next/image";

export type TProps = {
  src: string;
  alt: string;
  title: string;
  styles?: string;
};

const Hero = ({ src, alt, title, styles }: TProps) => {
  return (
    <div className="relative desktop:w-screen">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={`${styles} min-h-[11.5rem] w-full desktop:h-[11.5rem]  desktop:object-cover`}
      />
      <h1 className="absolute left-[50%] top-[50%] w-full -translate-x-1/2 -translate-y-1/2 text-center font-archivo text-2xl font-bold uppercase text-VIprimary-color drop-shadow-VI-1 zero:hidden desktop:flex desktop:flex-col desktop:items-center">
        {title}
      </h1>
    </div>
  );
};

export default Hero;
