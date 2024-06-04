import Image from "next/image";
import Link from "next/link";

export type TProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
  text: string;
};

const FeedCard = ({ id, src, alt, title, text }: TProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={src} alt={alt} width={350} height={329}></Image>
      <h3 className="mt-9 text-center font-archivo font-extrabold text-VIprimary-color">
        {title}
      </h3>
      <p className="my-9">{text}</p>

      <Link
        href={`/properties/${id - 1}`}
        className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-VIsecondary-color px-4 py-2 text-sm font-medium text-VIprimary-color ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Conhecer
      </Link>
    </div>
  );
};

export default FeedCard;
