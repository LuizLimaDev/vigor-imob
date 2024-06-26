import FeaturedVenture from "./_components/FeaturedVenture/FeaturedVenture";
import Feed from "./_components/Feed/Feed";
import SectionTitleBar from "./_components/SectionTitleBar/SectionTitleBar";
import VideoPlayer from "./_components/VideoPlayer/VideoPlayer";
import VideoStory from "./_components/VideoStory/VideoStory";

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
      "https://king-prawn-app-vxkkv.ondigitalocean.app/api/feed?page=1"
    );

    if (!res.ok) {
      throw new Error("Falha ao consultar o Banco de dados!");
    }

    return res.json();
  }
  const Feeds: TFeedProps = await getFeed();

  async function getAllHome() {
    const res = await fetch(
      "https://king-prawn-app-vxkkv.ondigitalocean.app/api/home"
    );

    if (!res.ok) {
      throw new Error("Falha ao consultar o Banco de dados!");
    }

    return res.json();
  }
  const homeData = await getAllHome();
  console.log(homeData);

  return (
    <main className="flex w-screen flex-col items-center justify-between bg-VIligth-color">
      <VideoPlayer />

      <FeaturedVenture />

      {/* fazer condicional para exibir imoveis story */}
      <VideoStory />

      <div>
        <SectionTitleBar>Novidades</SectionTitleBar>
        <Feed feed={Feeds.feed} />
      </div>
    </main>
  );
};

export default Home;
