import Image from "next/image";

export type TProps = {
  size: string | undefined;
  bedroom: string | undefined;
  bathroom: string | undefined;
  garage: string | undefined;
  price: string | undefined;
  rent: string | undefined;
  taxe: string | undefined;
};

const PropertieInfo = ({
  size,
  bedroom,
  bathroom,
  garage,
  price,
  rent,
  taxe,
}: TProps) => {
  return (
    <>
      {/* infos */}
      <div className="mb-9 flex w-full flex-wrap gap-4 font-poppins text-xs text-VIprimary-color">
        {/* size */}
        <div className="flex w-[9rem] items-end justify-start gap-2">
          <Image src="/Icons/size.svg" alt="tamanho" width={24} height={24} />
          <p>{size}m²</p>
        </div>

        {/* bedroom */}
        <div className="flex w-[9rem] items-end justify-start gap-2">
          <Image
            src="/Icons/bedroom.svg"
            alt="quartos"
            width={30}
            height={22}
          />
          <p>
            {bedroom} quarto
            {bedroom! > "1" ? "s" : ""}
          </p>
        </div>

        {/* bathroom */}
        <div className="flex w-[9rem] items-end justify-start gap-2">
          <Image
            src="/Icons/bathroom.svg"
            alt="banheiros"
            width={30}
            height={22}
          />
          <p>
            {bathroom} banheiro
            {bathroom! > "1" ? "s" : ""}
          </p>
        </div>

        {/* garage */}
        <div className="flex items-end justify-start gap-2">
          <Image src="/Icons/car.svg" alt="banheiros" width={30} height={22} />
          <p>
            {garage} carro
            {garage! > "1" ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="mb-6 zero:hidden desktop:flex desktop:w-[32.0625rem] desktop:justify-between">
        <p className="font-archivo text-sm font-bold text-VIprimary-color">
          Compra: <span className="text-VIsecondary-color">${price}</span>
        </p>
        <p className="font-archivo text-sm font-bold text-VIprimary-color">
          Aluguel: <span className="text-VIsecondary-color">${rent}</span>
        </p>

        <p className="font-archivo text-sm font-bold text-VIprimary-color">
          Condomínio: <span className="text-VIsecondary-color">${taxe}</span>
        </p>
      </div>
    </>
  );
};

export default PropertieInfo;
