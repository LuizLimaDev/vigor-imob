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
      </div>
    </div>
  );
};

export default FeedCard;
