import Title from "@/app/_components/Title/Title";
import RegisterPropertieForm from "./_components/RegisterPropertieForm/RegisterPropertieForm";

const CadastrarImovel = () => {
  return (
    <main className="flex w-screen flex-col items-center justify-center desktop:pr-4">
      <div className="relative w-full desktop:mt-20">
        <Title className="my-14 text-[3rem]">Cadastro de imóvel</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <RegisterPropertieForm />
      </div>
    </main>
  );
};

export default CadastrarImovel;
