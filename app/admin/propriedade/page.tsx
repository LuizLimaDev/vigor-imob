import Title from "../../_components/Title/Title";
import RegisterPropertie from "./RegisterPropertie/RegisterPropertie";

const Admin = () => {
  return (
    <main className="flex w-screen flex-col items-center justify-center desktop:pr-4">
      <div className="relative w-full desktop:mt-20">
        <Title>Cadastro de imóvel</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <RegisterPropertie />
      </div>
    </main>
  );
};

export default Admin;
