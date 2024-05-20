import FeedCard from "./FeedCard/FeedCard";
import feeds from "../../_utils/feed.json";

const Feed = () => {
  return (
    <div className="mb-9 mt-8 flex flex-col justify-center gap-9 px-3 text-center">
      {feeds.map((feed) => (
        <div key={feed.id}>
          <FeedCard
            src={feed.src}
            alt={feed.alt}
            title={feed.title}
            text={feed.text}
          />
        </div>
      ))}
    </div>
  );
};

export default Feed;
