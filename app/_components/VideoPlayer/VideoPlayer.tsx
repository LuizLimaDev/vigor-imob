const VideoPlayer = () => {
  return (
    <div className="h-[12.5rem] w-full">
      <div>
        <video
          src="/video/intro-video.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
