import Title from "@/app/_components/Title/Title";
import Image from "next/image";

type TProps = {
  photo: string;
  title: string;
};

const PropertieEditCard = ({ photo, title }: TProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7">
      <Image
        src={photo}
        alt="foto do imóvel"
        width={0}
        height={0}
        sizes="100vw"
        className="h-[19.0625rem] w-[18.75rem]"
      />
      <Title className="text-2xl capitalize">{title}</Title>

      <div className="flex w-full justify-center gap-12">
        <Image
          src="/Icons/edit.svg"
          alt="foto do imóvel"
          width={25}
          height={25}
          sizes="100vw"
        />
        <Image
          src="/Icons/delete.svg"
          alt="foto do imóvel"
          width={24}
          height={26}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default PropertieEditCard;
