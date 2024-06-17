import Image from "next/image";
import Title from "../Title/Title";

const VideoStory = () => {
  return (
    <div className="mt-10 min-h-[32rem] w-full bg-VIsecondary-color zero:hidden desktop:flex desktop:justify-center">
      <div>
        <Title className="mt-16 text-center">imóveis</Title>
        <div className="mt-8 flex gap-10">
          {/* map com componente dos videos */}
          <Image
            src="/video-story.png"
            alt="video story"
            width={232}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoStory;
