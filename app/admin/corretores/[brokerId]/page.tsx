import Title from "@/app/_components/Title/Title";
import RegisterBrokerForm from "./_components/RegisterBrokerForm/RegisterBrokerForm";

const EditarCorretores = async ({
  params,
}: {
  params: { brokerId: string };
}) => {
  async function getBrokers() {
    "use server";
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/employ/${params.brokerId}`,
      { cache: "no-cache" }
    );

    if (!res.ok) {
      console.log("Corretor não encontrado!");
    }

    const data = await res.json();

    return data;
  }
  const broker = await getBrokers();

  return (
    <main className="flex w-screen flex-col items-center justify-center desktop:pr-4">
      <div className="relative w-full desktop:mt-20">
        <Title className="my-14 text-[3rem]">Editar de corretor</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <RegisterBrokerForm broker={broker} />
      </div>
    </main>
  );
};

export default EditarCorretores;
