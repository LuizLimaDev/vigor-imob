import Title from "@/app/_components/Title/Title";

const VideoStory = ({ stories }: any) => {
  return (
    <div className="mt-10 min-h-[32rem] w-full bg-VIsecondary-color zero:hidden desktop:flex desktop:justify-center">
      <div>
        <Title className="mt-16 text-center">imóveis</Title>
        <div className="mt-8 flex w-screen gap-10 overflow-scroll px-10 [&::-webkit-scrollbar]:hidden">
          {stories.map((video: string, index: number) =>
            video ? (
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
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoStory;
