import Image from "next/image";
import Link from "next/link";

export type TProps = {
  src: string;
  alt: string;
  title: string;
  neighborhood: string;
  href: string;
};

const PropertieCard = ({ src, alt, title, neighborhood, href }: TProps) => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <Image src={src} alt={alt} width={350} height={273} />
      <h3 className="mt-6 font-poppins text-2xl font-bold text-VIprimary-color">
        {title}
      </h3>
      <p className="font-poppins text-sm text-VIsecondary-color">
        {neighborhood}
      </p>

      <Link
        href={href}
        className="mt-10 rounded-lg border border-VIprimary-color px-6 py-3 font-poppins text-sm text-VIprimary-color"
      >
        Ver Detalhes
      </Link>
    </div>
  );
};

export default PropertieCard;
