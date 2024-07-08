import Image from "next/image";
import Link from "next/link";

export type TProps = {
  id: string;
  src: string;
  alt: string;
  title: string;
  city: string;
  state: string;
  price: string;
  rent: string;
};

const PropertieCard = ({
  id,
  src,
  alt,
  title,
  city,
  state,
  price,
  rent,
}: TProps) => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center desktop:w-[36.06rem]">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="h-[17.0625rem] w-[21.875rem] rounded-md desktop:h-[28.125rem] desktop:w-[36.0625rem]"
      />

      <div className="mb-10 flex flex-col items-center justify-center desktop:w-[36.0625rem] desktop:flex-row desktop:justify-between">
        <div className="flex flex-col items-center justify-center gap-1 desktop:gap-1">
          <h3 className="mt-6 font-poppins text-2xl font-bold text-VIprimary-color desktop:self-start">
            {title}
          </h3>

          <div className="flex gap-10 desktop:flex desktop:w-[21.1875rem] desktop:justify-between">
            <p className="font-archivo text-sm font-bold text-VIprimary-color">
              Compra:
              <span className="text-VIsecondary-color"> ${price}</span>
            </p>
            <p className="font-archivo text-sm font-bold text-VIprimary-color">
              Aluguel:
              <span className="text-VIsecondary-color"> ${rent}</span>
            </p>
          </div>

          <p className="font-poppins text-sm text-VIsecondary-color desktop:self-start">
            {city} - {state}
          </p>
        </div>

        <Link
          href={`/properties/${id}`}
          className="mt-10 rounded-lg border border-VIprimary-color px-6 py-3 font-poppins text-sm text-VIprimary-color desktop:z-50"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default PropertieCard;
