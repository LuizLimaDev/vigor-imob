import Title from "@/app/_components/Title/Title";
import EditPropertieForm from "./_components/EditPropertieForm/EditPropertieForm";

const EditarImovel = async ({ params }: { params: { propertyId: string } }) => {
  async function getProperties() {
    "use server";
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/property/${params.propertyId}`,
      { cache: "no-cache" }
    );

    if (!res.ok) {
      console.log("Propriedade não encontrada!");
    }

    const data = await res.json();

    return data;
  }
  const property = await getProperties();

  return (
    <main className="flex w-screen flex-col items-center justify-center desktop:pr-4">
      <div className="relative w-full desktop:mt-20">
        <Title className="my-14 text-[3rem]">Editar de imóvel</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <EditPropertieForm property={property} />
      </div>
    </main>
  );
};

export default EditarImovel;
