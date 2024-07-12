import Title from "@/app/_components/Title/Title";
import { revalidatePath } from "next/cache";
import UpdateHomeForm from "./_components/UpdateHomeForm/UpdateHomeForm";

const EditarHome = async () => {
  async function getAllotments() {
    "use server";
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/property`,
      { cache: "no-cache" }
    );

    if (!res.ok) {
      console.log("Sem propriedades");
    }

    const data = await res.json();
    const allotments: string[] = data.map(
      (property: { allotment: string }) => property.allotment
    );

    revalidatePath("/admin/editarhome");

    return allotments;
  }

  async function getHomeData() {
    "use server";
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/home`,
      { cache: "no-cache" }
    );

    if (!res.ok) {
      console.log("Erro ao consultar a API.");
    }

    const data = await res.json();
    const homeData = data[0];

    revalidatePath("/admin/editarhome");

    return homeData;
  }
  const allotments = await getAllotments();
  const homeData = await getHomeData();

  return (
    <main className="flex w-screen flex-col items-center justify-center ">
      <div className="w-full desktop:mt-20">
        <Title className="my-14 text-[3rem]">Editar Home</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <UpdateHomeForm allotments={allotments} homeData={homeData} />
      </div>
    </main>
  );
};

export default EditarHome;
