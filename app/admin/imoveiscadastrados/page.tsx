import db from "../../../db/db.json";
import Title from "../../_components/Title/Title";
import PropertieEditCard from "./_components/PropertieEditCard.PropertieEditCard";

const properties = db.properties;

const Imoveiscadastrados = () => {
  return (
    <main className="flex w-screen flex-col items-center justify-center pt-20">
      <Title className="my-14 text-[3rem]">Imóveis cadastrados</Title>

      <div className="mb-20 flex w-[66.85rem] flex-wrap justify-center gap-20">
        {properties.map((propertie) => (
          <PropertieEditCard
            key={propertie.id}
            photo={propertie.src}
            title={propertie.title}
          />
        ))}
      </div>
    </main>
  );
};

export default Imoveiscadastrados;
