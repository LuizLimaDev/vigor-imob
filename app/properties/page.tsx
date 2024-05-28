import Hero from "../_components/Hero/Hero";
import MenuSliderProperties from "./MenuSliderProperties/MenuSliderProperties";
import PropertieCard from "./PropertieCard/PropertieCard";

const Properties = () => {
  return (
    <main className="w-screen py-16">
      <Hero src="/Pages/properties/hero.png" alt="imóveis" title="Imóveis" />
      <MenuSliderProperties />

      <div className="flex flex-col items-center justify-center">
        <PropertieCard
          src="/Pages/properties/01.png"
          alt="Loteamento Primavera"
          title="Loteamento Primavera"
          neighborhood="Vila Mariana | SP"
          href="#"
        />
        <PropertieCard
          src="/Pages/properties/02.png"
          alt="Loteamento Primavera"
          title="Loteamento Primavera"
          neighborhood="Vila Mariana | SP"
          href="#"
        />
        <PropertieCard
          src="/Pages/properties/03.png"
          alt="Loteamento Primavera"
          title="Loteamento Primavera"
          neighborhood="Vila Mariana | SP"
          href="#"
        />
      </div>
    </main>
  );
};

export default Properties;
