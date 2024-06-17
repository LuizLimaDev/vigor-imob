import db from "../../db/db.json";
import Hero from "../_components/Hero/Hero";
import MenuSliderProperties from "./MenuSliderProperties/MenuSliderProperties";
import PropertieCard from "./PropertieCard/PropertieCard";

const properties = db.properties.filter(
  (propertie) => propertie.propertie === true
);

const Properties = () => {
  return (
    <main className="w-screen py-16 desktop:pt-20">
      <Hero src="/Pages/properties/hero.png" alt="imóveis" title="Imóveis" />
      <MenuSliderProperties />

      <div className="flex flex-col items-center justify-center desktop:w-screen desktop:flex-row desktop:flex-wrap desktop:gap-x-10 desktop:gap-y-12">
        {properties.map((propertie) => (
          <PropertieCard
            key={propertie.id}
            id={String(propertie.id)}
            src={propertie.src}
            alt={propertie.title}
            title={propertie.title}
            city={propertie.city}
            state={propertie.state}
          />
        ))}
      </div>
    </main>
  );
};

export default Properties;
