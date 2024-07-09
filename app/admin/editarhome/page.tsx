import Title from "../../_components/Title/Title";
import UpdateHomeForm from "./_components/UpdateHomeForm/UpdateHomeForm";

const EditarHome = () => {
  return (
    <main className="flex w-screen flex-col items-center justify-center ">
      <div className="w-full desktop:mt-20">
        <Title className="my-14 text-[3rem]">Editar Home</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <UpdateHomeForm />
      </div>
    </main>
  );
};

export default EditarHome;
