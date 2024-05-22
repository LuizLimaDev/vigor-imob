import Image from "next/image";

const VideoPlayer = () => {
  return (
    <Image
      src="video-player.svg"
      alt="video imóvel"
      width={0}
      height={0}
      className="h-[11.06rem] w-screen object-cover"
    />
  );
};

export default VideoPlayer;
