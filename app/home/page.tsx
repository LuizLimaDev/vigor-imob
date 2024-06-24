import FeaturedVenture from "../_components/FeaturedVenture/FeaturedVenture";
import Feed from "../_components/Feed/Feed";
import SectionTitleBar from "../_components/SectionTitleBar/SectionTitleBar";
import VideoPlayer from "../_components/VideoPlayer/VideoPlayer";
import VideoStory from "../_components/VideoStory/VideoStory";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-between bg-VIligth-color">
      <VideoPlayer />

      <FeaturedVenture />

      {/* fazer condicional para exibir imoveis story */}
      <VideoStory />

      <div>
        <SectionTitleBar>Novidades</SectionTitleBar>
        <Feed />
      </div>
    </main>
  );
}
