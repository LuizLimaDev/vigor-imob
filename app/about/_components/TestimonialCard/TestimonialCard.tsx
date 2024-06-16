import Image from "next/image";

export type TProps = {
  avatar: string;
  text: string;
  name: string;
  venture: string;
  styles?: string;
};

const TestimonialCard = ({ avatar, text, name, venture, styles }: TProps) => {
  return (
    <div
      className={`shadow-md" drop flex w-full flex-col items-center justify-center rounded-[.5rem] px-8 py-6 shadow-md ${styles}`}
    >
      <Image
        src={avatar}
        alt="avatar"
        width={60}
        height={60}
        className="mb-4 drop-shadow-VI-2"
      />

      <div className="flex w-full gap-4">
        <div>
          <Image
            src="/Pages/about/quotes.png"
            alt="avatar"
            width={0}
            height={0}
            sizes="100vw"
            className="min-h-3 min-w-4"
          />
        </div>

        <div>
          <p className="mb-6 text-justify font-poppins font-light">{text}</p>

          <p className="font-poppins text-lg">{name}</p>
          <p className="font-poppins text-sm font-light text-slate-500">
            {venture}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
