const VideoPlayer = () => {
  return (
    <div className="h-[12.5rem] w-full desktop:h-[23.312rem]">
      <div>
        <video
          src="/video/intro-video.mp4"
          autoPlay
          loop
          muted
          className="h-[15rem] w-full object-cover desktop:h-[25rem]"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
