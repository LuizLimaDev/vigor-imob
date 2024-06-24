import Title from "../../_components/Title/Title";
import RegisterBrokerForm from "./RegisterBrokerForm.RegisterBrokerForm";

const Corretores = () => {
  return (
    <main className="flex w-screen flex-col items-center justify-center desktop:pr-4">
      <div className="relative w-full desktop:mt-20">
        <Title>Cadastro de corretor</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <RegisterBrokerForm />
      </div>
    </main>
  );
};

export default Corretores;
