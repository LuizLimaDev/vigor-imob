import Image from "next/image";

export type TProps = {
  title: string;
  photos: { id: number; src: string; alt: string }[];
};

const PhotoSlider = ({ title, photos }: TProps) => {
  return (
    <div className="mt-10 flex flex-col">
      <h1 className="mb-3 font-poppins font-bold capitalize text-VIprimary-color">
        {title}
      </h1>

      <div className="flex overflow-scroll [&::-webkit-scrollbar]:hidden">
        {photos.map((item, id) => (
          <Image
            key={id}
            src={item.src}
            alt={item.alt}
            width={0}
            height={0}
            sizes="100vw"
            className="rouded-[.5rem] mb-10 h-[10.312rem] min-w-[12.687rem] gap-3"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
