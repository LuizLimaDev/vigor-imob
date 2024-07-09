import Title from "@/app/_components/Title/Title";
import { TBroker } from "@/app/types/brokersType";
import { revalidatePath } from "next/cache";
import BrokerEditCard from "./_components/BrokerEditCard";

const AdminCorretores = async () => {
  async function getBrokers() {
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/employ`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.log("Sem corretores");
    }

    revalidatePath("/admin/corretores", "page");

    return res.json();
  }
  const brokers: TBroker[] = await getBrokers();

  return (
    <main className="flex w-screen flex-col items-center justify-center pt-20">
      <Title className="my-14 text-[3rem]">Corretores cadastrados</Title>

      <div className="mb-20 flex w-[66.85rem] flex-wrap justify-center gap-20">
        {brokers.map((broker: TBroker) => (
          <BrokerEditCard
            key={broker._id}
            id={broker._id}
            image={broker.profileImage}
            title={broker.name}
          />
        ))}
      </div>
    </main>
  );
};

export default AdminCorretores;
