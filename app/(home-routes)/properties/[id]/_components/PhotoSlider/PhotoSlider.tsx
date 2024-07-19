import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import Image from "next/image";

export type TProps = {
  title: string;
  photos: string[];
};

const PhotoSlider = ({ title, photos }: TProps) => {
  return (
    <div className="mt-10 flex flex-col desktop:w-screen">
      <h1 className="mb-3 font-poppins font-bold capitalize text-VIprimary-color">
        {title}
      </h1>

      <div className="mr-3 flex gap-3 overflow-scroll desktop:gap-6 [&::-webkit-scrollbar]:hidden">
        {photos.map((item, id) => (
          <Dialog key={id}>
            <DialogTrigger asChild>
              <Image
                key={id}
                src={item}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                className="rouded-[.5rem] mb-10 h-[10.312rem] min-w-[12.687rem] cursor-pointer gap-3 rounded-md"
              />
            </DialogTrigger>
            <DialogContent className="flex !h-[80%] min-w-[80%] items-center justify-center rounded-md">
              <DialogTitle className="hidden">Foto tela cheia</DialogTitle>

              <div className="flex h-[90vh] w-[90vw] items-center justify-center">
                <Image
                  key={id}
                  src={item}
                  alt={title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rouded-[.5rem] h-[60%] w-[90%] desktop:h-[80%]"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
