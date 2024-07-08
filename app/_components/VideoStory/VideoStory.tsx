import Title from "../Title/Title";

const VideoStory = ({ stories }: any) => {
  console.log("stories: ", stories);
  return (
    <div className="mt-10 min-h-[32rem] w-full bg-VIsecondary-color zero:hidden desktop:flex desktop:justify-center">
      <div>
        <Title className="mt-16 text-center">imóveis</Title>
        <div className="mt-8 flex gap-10">
          {/* map com componente dos videos */}
          {stories.map((video: string, index: number) => (
            <iframe
              key={index}
              width="232"
              height="300"
              src={`${video}&showinfo=0&controls=0&showinfo=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={`${index % 2 === 0 ? "desktop:order-2" : "desktop:order-1"} rounded-md`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoStory;
