import Title from "../../_components/Title/Title";
import RegisterFeedForm from "./_components/RegisterFeedForm/RegisterFeedForm";

const AdminFeed = () => {
  return (
    <main className="flex w-screen flex-col items-center justify-center ">
      <div className="w-full desktop:mt-20">
        <Title className="my-14 text-[3rem]">Cadastrar Feed</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <RegisterFeedForm />
      </div>
    </main>
  );
};

export default AdminFeed;
