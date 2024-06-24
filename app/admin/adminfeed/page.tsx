import Title from "../../_components/Title/Title";
import RegisterFeedForm from "./RegisterFeedForm/RegisterFeedForm";

const AdminFeed = () => {
  return (
    <main className="flex w-screen flex-col items-center justify-center ">
      <div className="relative w-full desktop:mt-20">
        <Title>Cadastrar Feed</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <RegisterFeedForm />
      </div>
    </main>
  );
};

export default AdminFeed;