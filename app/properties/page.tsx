import Hero from "../_components/Hero/Hero";
import MenuSliderProperties from "./MenuSliderProperties/MenuSliderProperties";
import PropertieCard from "./PropertieCard/PropertieCard";

export type Tproperties = {
  _id: string;
  name: string;
  category: string[];
  rooms: number;
  bathrooms: number;
  area: number;
  garage: number;
  description: string;
  price: number;
  rent: number;
  image: string[];
  taxe: number;
  city: string;
  state: string;
};

const Properties = async () => {
  async function getProperties() {
    const res = await fetch(
      "https://king-prawn-app-vxkkv.ondigitalocean.app/api/property"
    );

    if (!res.ok) {
      throw new Error("Falha ao consultar o Banco de dados!");
    }

    return res.json();
  }
  const properties = await getProperties();

  return (
    <main className="relative w-screen py-16 desktop:flex desktop:flex-col desktop:pt-0">
      <Hero
        src="/Pages/properties/hero.png"
        alt="imóveis"
        title="Escolha seu imóvel"
        styles="desktop:h-[30rem] desktop:flex"
      />
      <MenuSliderProperties />

      <div className="flex flex-col items-center justify-center desktop:w-screen desktop:flex-row desktop:flex-wrap desktop:gap-x-10 desktop:gap-y-12">
        {properties.map((propertie: Tproperties) => (
          <PropertieCard
            key={propertie._id}
            id={String(propertie._id)}
            src={propertie.image[0]}
            alt={propertie.name}
            title={propertie.name}
            city={propertie.city}
            state={propertie.state}
          />
        ))}
      </div>
    </main>
  );
};

export default Properties;
