import { Tproperties } from "@/app/types/propertiesType";
import { revalidatePath } from "next/cache";
import Title from "../../_components/Title/Title";
import PropertieEditCard from "./_components/PropertieEditCard";

const AdminImoveis = async () => {
  async function getProperties() {
    "use server";
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/property`,
      { next: { revalidate: 10 } }
    );

    if (!res.ok) {
      console.log("Sem propriedades");
    }

    revalidatePath("/admin/imoveis", "page");

    return res.json();
  }
  const properties = await getProperties();

  return (
    <main className="flex w-screen flex-col items-center justify-center pt-20">
      <Title className="my-14 text-[3rem]">Imóveis cadastrados</Title>

      <div className="mb-20 flex w-[66.85rem] flex-wrap justify-center gap-20">
        {!properties.error ? (
          properties.map((propertie: Tproperties) => (
            <PropertieEditCard
              key={propertie._id}
              id={propertie._id}
              photo={propertie.image[0]}
              title={propertie.name}
            />
          ))
        ) : (
          <p>Não temos propriedades a venda no momento!</p>
        )}
      </div>
    </main>
  );
};

export default AdminImoveis;
