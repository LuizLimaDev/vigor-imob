import FeedCard from "./FeedCard/FeedCard";

export type TProps = {
  feed: [
    {
      _id: string;
      title: string;
      video: string;
      description: string;
      __v: number;
    },
  ];
};

const Feed = ({ feed }: TProps) => {
  const feeds = feed.map((item, index) => {
    return { ...item, index };
  });
  console.log(feeds);

  return (
    <div className="mb-9 mt-8 flex flex-col justify-center gap-9 px-3 text-center">
      {feeds.map((feed) => (
        <div key={feed._id}>
          <FeedCard
            id={feed._id}
            index={feed.index}
            src={feed.video}
            title={feed.title}
            text={feed.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Feed;
