import FeaturedVenture from "./_components/FeaturedVenture/FeaturedVenture";
import VideoPlayer from "./_components/VideoPlayer/VideoPlayer";
import SectionTitleBar from "./_components/SectionTitleBar/SectionTitleBar";
import Feed from "./_components/Feed/Feed";

export default function Home() {
  return (
    <>
      <main className="flex w-screen flex-col items-center justify-between bg-VIligth-color">
        <VideoPlayer />

        <FeaturedVenture />

        <SectionTitleBar>Novidades</SectionTitleBar>
        <Feed />
      </main>
    </>
  );
}
