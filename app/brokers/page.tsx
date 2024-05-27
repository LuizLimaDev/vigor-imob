import Image from "next/image";
import BrokerCard from "./_components/BrokerCard/BrokerCard";

const Brokers = () => {
  return (
    <main className="w-screen pt-16">
      <div className="relative">
        <Image
          src="/Pages/brokers/hero.png"
          alt="registre seu imóvel"
          width={0}
          height={0}
          sizes="100vw"
          className="min-h-[11.5rem] w-full"
        />
        <h1 className="absolute left-[50%] top-[50%] w-full -translate-x-1/2 -translate-y-1/2 text-center font-archivo text-2xl font-bold uppercase text-VIprimary-color drop-shadow-VI-1">
          Corretores
        </h1>
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
