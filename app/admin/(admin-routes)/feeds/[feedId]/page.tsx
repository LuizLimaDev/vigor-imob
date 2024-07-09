import Title from "@/app/_components/Title/Title";
import RegisterFeedForm from "./_components/RegisterFeedForm/RegisterFeedForm";

const Cadastrarfeed = async ({ params }: { params: { feedId: string } }) => {
  async function getFeed() {
    "use server";
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/feed/${params.feedId}`,
      { cache: "no-cache" }
    );

    if (!res.ok) {
      console.log("Propriedade não encontrada!");
    }

    const data = await res.json();

    return data;
  }
  const feed = await getFeed();

  return (
    <main className="flex w-screen flex-col items-center justify-center ">
      <div className="w-full desktop:mt-20">
        <Title className="my-14 text-[3rem]">Editar Feed</Title>
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <RegisterFeedForm feed={feed} />
      </div>
    </main>
  );
};

export default Cadastrarfeed;
