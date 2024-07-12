import Title from "@/app/_components/Title/Title";
import VentureCard from "./VentureCard/VentureCard";

const FeaturedVenture = ({ ventures }: { ventures: string[] }) => {
  const FeaturedVentureDb = ventures;

  return (
    <div
      className="
        w-screen -translate-y-2 rounded-tl-[2.5rem] bg-VIligth-color pb-4 pl-9 pt-9 desktop:z-50 desktop:-translate-y-[1.55rem] desktop:rounded-bl-[2.5rem] desktop:pt-20
      "
    >
      <div>
        <Title className="pb-6">Empreendimentos em destaque</Title>

        <div
          className=" 
          flex gap-[2.125rem] overflow-hidden overflow-x-scroll pr-10 desktop:justify-center   desktop:pl-10 [&::-webkit-scrollbar]:hidden
          "
        >
          {FeaturedVentureDb.length === 0 ? (
            <VentureCard title="Em breve..." />
          ) : (
            FeaturedVentureDb.map((venture: string, index: number) => (
              <VentureCard key={index} title={venture} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedVenture;
