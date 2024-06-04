import FeedCard from "./FeedCard/FeedCard";
import db from "../../../db/db.json";

const feeds = db.properties.filter((item) => item.propertie === false);
console.log(feeds);

const Feed = () => {
  return (
    <div className="mb-9 mt-8 flex flex-col justify-center gap-9 px-3 text-center">
      {feeds.map((feed) => (
        <div key={feed.id}>
          <FeedCard
            id={feed.id}
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
