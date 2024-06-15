import FeaturedVenture from "./_components/FeaturedVenture/FeaturedVenture";
import VideoPlayer from "./_components/VideoPlayer/VideoPlayer";
import SectionTitleBar from "./_components/SectionTitleBar/SectionTitleBar";
import Feed from "./_components/Feed/Feed";
import VideoStory from "./_components/VideoStory/VideoStory";

export default function Home() {
  return (
    <>
      <main className="flex w-screen flex-col items-center justify-between bg-VIligth-color">
        <VideoPlayer />

        <FeaturedVenture />

        {/* fazer condicional para exibir imoveis story */}
        <VideoStory />

        <SectionTitleBar>Novidades</SectionTitleBar>
        <Feed />
      </main>
    </>
  );
}
