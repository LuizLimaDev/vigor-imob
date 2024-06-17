import db from "../../../db/db.json";
import Title from "../Title/Title";
import VentureCard from "./VentureCard/VentureCard";

const FeaturedVenture = () => {
  const FeaturedVentureDb = db.properties.filter((propertie) =>
    propertie.src.includes("Ventures")
  );

  return (
    <div
      className="
        w-screen -translate-y-6 rounded-tl-[2.5rem] bg-VIligth-color pb-4 pl-9 pt-9 desktop:z-50 desktop:-translate-y-[1.55rem] desktop:rounded-bl-[2.5rem] desktop:pt-20
      "
    >
      <div>
        <Title className="pb-6">Empreendimentos em destaque</Title>

        <div
          className="
            flex gap-[2.125rem] overflow-hidden overflow-x-scroll desktop:justify-center   [&::-webkit-scrollbar]:hidden
          "
        >
          {FeaturedVentureDb.map((venture) => (
            <VentureCard
              key={venture.id}
              id={venture.id}
              src={venture.src}
              title={venture.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedVenture;
