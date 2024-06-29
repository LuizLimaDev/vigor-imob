import Hero from "../_components/Hero/Hero";
import BrokerCard from "./_components/BrokerCard/BrokerCard";

export type Tbrokers = {
  _id: string;
  name: string;
  description: string;
  profileImage: string;
};

const Brokers = async () => {
  async function getBrokers() {
    const res = await fetch(
      "https://king-prawn-app-vxkkv.ondigitalocean.app/api/employ"
    );

    if (!res.ok) {
      throw new Error("Falha ao consultar o Banco de dados!");
    }

    return res.json();
  }
  const brokers = await getBrokers();

  return (
    <main className="desktop: w-screen items-center pt-16 desktop:flex desktop:flex-col desktop:justify-center desktop:pt-20">
      <div className="relative w-full">
        <Hero
          src="/Pages/brokers/hero.png"
          alt="Corretores"
          title="Corretores"
        />
      </div>

      <div className="my-10 flex w-full flex-col items-center justify-center gap-28 desktop:max-w-[73.25rem] desktop:flex-row desktop:flex-wrap desktop:gap-36">
        {brokers.map((broker: Tbrokers) => (
          <BrokerCard
            key={broker._id}
            src={broker.profileImage}
            alt={broker.name}
            name={broker.name}
            text={broker.description}
            creci={broker._id}
          />
        ))}
      </div>
    </main>
  );
};

export default Brokers;
