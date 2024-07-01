import { Tproperties } from "@/app/types/propertiesType";
import { revalidatePath } from "next/cache";
import Title from "../../_components/Title/Title";
import PropertieEditCard from "./_components/PropertieEditCard.PropertieEditCard";

const Imoveiscadastrados = async () => {
  async function getProperties() {
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/property`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.log("Sem propriedades");
    }

    revalidatePath("/admin/imoveiscadastrados", "page");

    return res.json();
  }
  const properties = await getProperties();

  return (
    <main className="flex w-screen flex-col items-center justify-center pt-20">
      <Title className="my-14 text-[3rem]">Imóveis cadastrados</Title>

      <div className="mb-20 flex w-[66.85rem] flex-wrap justify-center gap-20">
        {properties.map((propertie: Tproperties) => (
          <PropertieEditCard
            key={propertie._id}
            id={propertie._id}
            photo={propertie.image[0]}
            title={propertie.name}
          />
        ))}
      </div>
    </main>
  );
};

export default Imoveiscadastrados;
