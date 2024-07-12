import FeaturedVenture from "@/app/_components/FeaturedVenture/FeaturedVenture";
import Feed from "@/app/_components/Feed/Feed";
import SectionTitleBar from "@/app/_components/SectionTitleBar/SectionTitleBar";
import VideoPlayer from "@/app/_components/VideoPlayer/VideoPlayer";
import VideoStory from "@/app/_components/VideoStory/VideoStory";
import { revalidatePath } from "next/cache";

export type TFeedProps = {
  feed: [
    {
      _id: string;
      title: string;
      video: string;
      description: string;
      __v: number;
    },
  ];
  pagination: { next: { page: number; limit: number } };
};

const Home = async () => {
  async function getFeed() {
    const res = await fetch(
      "https://king-prawn-app-vxkkv.ondigitalocean.app/api/feed?page=1",
      { cache: "no-cache" }
    );

    if (!res.ok) {
      throw new Error("Falha ao consultar o Banco de dados!");
    }

    revalidatePath("/properties");

    return res.json();
  }
  const Feeds: TFeedProps = await getFeed();

  async function getAllHome() {
    const res = await fetch(
      "https://king-prawn-app-vxkkv.ondigitalocean.app/api/home",
      { cache: "no-cache" }
    );

    if (!res.ok) {
      throw new Error("Falha ao consultar o Banco de dados!");
    }

    return res.json();
  }
  const homeData = await getAllHome();

  return (
    <main className="flex w-screen flex-col items-center justify-between bg-VIligth-color">
      <VideoPlayer />

      <FeaturedVenture ventures={homeData[0].highlights} />

      {/* fazer condicional para exibir imoveis story */}
      <VideoStory stories={homeData[0].story} />

      <div>
        <SectionTitleBar>Novidades</SectionTitleBar>
        <Feed feed={Feeds.feed} />
      </div>
    </main>
  );
};

export default Home;
