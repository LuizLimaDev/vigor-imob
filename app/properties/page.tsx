import { revalidatePath } from "next/cache";
import Hero from "../_components/Hero/Hero";
import { Tproperties } from "../types/propertiesType";
import MenuSliderProperties from "./MenuSliderProperties/MenuSliderProperties";
import PropertieCard from "./PropertieCard/PropertieCard";

const Properties = async () => {
  async function getProperties() {
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/property`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.log("Sem propriedades");
    }

    revalidatePath("/properties", "page");

    return res.json();
  }
  const filteredProperties: Tproperties[] = await getProperties();
  const categories = filteredProperties
    .map((item) => item.category.slice(1))
    .flat();
  const filterButtons = [
    ...new Set(categories.map((item) => item.toLowerCase())),
  ];
  console.log(filterButtons);
  const cities = filteredProperties.map((item) => item.city);

  return (
    <main className="relative w-screen py-16 desktop:flex desktop:flex-col desktop:pt-0">
      <Hero
        src="/Pages/properties/hero.png"
        alt="imóveis"
        title="Escolha seu imóvel"
        styles="desktop:h-[30rem] desktop:flex"
      />
      <MenuSliderProperties filterButtons={filterButtons} cities={cities} />

      <div className="flex flex-col items-center justify-center desktop:w-screen desktop:flex-row desktop:flex-wrap desktop:gap-x-10 desktop:gap-y-12">
        {filteredProperties.map((propertie: Tproperties) => (
          <PropertieCard
            key={propertie._id}
            id={String(propertie._id)}
            src={propertie.image[0]}
            alt={propertie.name}
            title={propertie.name}
            city={propertie.city}
            state={propertie.state}
            price={propertie.price}
            rent={propertie.rent}
          />
        ))}
      </div>
    </main>
  );
};

export default Properties;
