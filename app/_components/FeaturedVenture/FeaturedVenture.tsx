import Title from "../Title/Title";
import VentureCard from "./VentureCard/VentureCard";

const FeaturedVenture = () => {
  return (
    <div
      className="
        w-screen -translate-x-[.7%] -translate-y-6 rounded-tl-[40px] bg-VIligth-color pb-4 pl-9 pt-9
      "
    >
      <div>
        <Title className="pb-6">Empreendimentos em destaque</Title>

        <div
          className="
            flex max-w-[358px]  gap-[34px] overflow-hidden overflow-x-scroll   [&::-webkit-scrollbar]:hidden
          "
        >
          <VentureCard image="/Ventures/01.png" name="Primavera" />
          <VentureCard image="/Ventures/02.png" name="Verão" />
          <VentureCard image="/Ventures/03.png" name="Outono" />
          <VentureCard image="/Ventures/04.png" name="Inverno" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVenture;
