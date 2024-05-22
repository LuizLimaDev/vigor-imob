import Image from "next/image";

export type TProps = {
  src: string;
  alt: string;
  text: string;
};

const FooterItem = ({ src, alt, text }: TProps) => {
  return (
    <div className=" flex  h-[1.187rem] items-center justify-start gap-2">
      <Image src={src} alt={alt} width={19.5} height={19.5} />
      <p className="flex justify-center gap-2 font-archivo text-sm font-bold ">
        {text}
      </p>
    </div>
  );
};

export default FooterItem;
