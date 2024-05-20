import FeaturedVenture from "./_components/FeaturedVenture/FeaturedVenture";
import MenuMobile from "./_components/MenuMobile/MenuMobile";
import VideoPlayer from "./_components/VideoPlayer/VideoPlayer";
import SectionTitleBar from "./_components/SectionTitleBar/SectionTitleBar";
import Feed from "./_components/Feed/Feed";
import Footer from "./_components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex max-w-[390px] flex-col items-center justify-between bg-VIligth-color">
      <VideoPlayer />
      <MenuMobile />

      <FeaturedVenture />

      <SectionTitleBar>Novidades</SectionTitleBar>
      <Feed />

      <Footer />
    </main>
  );
}
