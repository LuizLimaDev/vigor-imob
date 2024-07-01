import Title from "../../_components/Title/Title";
import RegisterBrokerForm from "./_components/RegisterBrokerForm/RegisterBrokerForm";

const CadastrarCorretores = () => {
  return (
    <main className="flex w-screen flex-col items-center justify-center desktop:pr-4">
      <div className="relative w-full desktop:mt-20">
        <Title className="my-14 text-[3rem]">Cadastro de corretor</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <RegisterBrokerForm />
      </div>
    </main>
  );
};

export default CadastrarCorretores;
