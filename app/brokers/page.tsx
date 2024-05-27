import BrokerCard from "./_components/BrokerCard/BrokerCard";
import Hero from "../_components/Hero/Hero";

const Brokers = () => {
  return (
    <main className="w-screen pt-16">
      <div className="relative">
        <Hero
          src="/Pages/brokers/hero.png"
          alt="Corretores"
          title="Corretores"
        />
      </div>

      <div className="my-10 flex w-full flex-col items-center justify-center gap-28">
        <BrokerCard
          src="/Pages/brokers/broker01.png"
          alt="Maria odete"
          name="Maria Odete"
          text="Corretor a mais de 10 anos e especializado em imóveis de alto nível."
          creci="XXXXXXXX"
        />
        <BrokerCard
          src="/Pages/brokers/broker02.png"
          alt="Osmar Pinto"
          name="Osmar Pinto"
          text="Corretor a mais de 10 anos e especializado em imóveis de alto nível."
          creci="XXXXXXXX"
        />
        <BrokerCard
          src="/Pages/brokers/broker03.png"
          alt="Luiza Santos"
          name="Luiza Santos"
          text="Corretor a mais de 10 anos e especializado em imóveis de alto nível."
          creci="XXXXXXXX"
        />
      </div>
    </main>
  );
};

export default Brokers;
