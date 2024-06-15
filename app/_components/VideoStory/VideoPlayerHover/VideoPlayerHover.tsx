"use client";

// import Image from "next/image";
import HoverVideoPlayer from "react-hover-video-player";

const VideoPlayerHover = () => {
  return (
    <div className="h-[300px] w-[232px] rounded-[6px]">
      <HoverVideoPlayer
        className="player-wrapper"
        style={{
          width: "232px",
          height: "300px",
          borderRadius: "6px",
        }}
        videoClassName="player-video"
        videoId="hover-video"
        videoStyle={{
          width: "232px",
          height: "300px",
          borderRadius: "6px",
        }}
        videoSrc="/video/story.mp4"
        playbackRangeEnd={20}
        restartOnPaused
        // pausedOverlay={
        //   <Image
        //     src="/Pages/properties/01.png"
        //     alt="capa video"
        //     width={0}
        //     height={0}
        //     sizes="100vw"
        //     className="h-[300px] w-[232px] rounded-[6px]"
        //   />
        // }
      />
    </div>
  );
};

export default VideoPlayerHover;
