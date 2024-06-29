import Link from "next/link";

export type TProps = {
  index: number;
  src: string;
  title: string;
  text: string;
};

const FeedCard = ({ index, src, title, text }: TProps) => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center desktop:flex-row desktop:gap-24">
      <iframe
        width="350"
        height="329"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`${index % 2 === 0 ? "desktop:order-2" : "desktop:order-1"} rounded-md`}
      />

      <div
        className={`${index % 2 === 0 ? "desktop:order-1" : "desktop:order-2"} desktop:w-[34.437rem] desktop:text-start`}
      >
        <h3 className="mt-9 text-center font-archivo font-extrabold text-VIprimary-color desktop:text-start">
          {title}
        </h3>
        <p className="my-9">{text}</p>

        <Link
          href={`/properties/${index - 1}`}
          className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-VIsecondary-color px-4 py-2 text-sm font-medium text-VIprimary-color ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Conhecer
        </Link>
      </div>
    </div>
  );
};

export default FeedCard;
