import Image from "next/image";
import Button from "../../Button/Button";

export type TProps = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

const FeedCard = ({ src, alt, title, text }: TProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={src} alt={alt} width={350} height={329}></Image>
      <h3 className="mt-9 text-center font-archivo font-extrabold text-VIprimary-color">
        {title}
      </h3>
      <p className="my-9">{text}</p>

      <Button>Conhecer</Button>
    </div>
  );
};

export default FeedCard;
