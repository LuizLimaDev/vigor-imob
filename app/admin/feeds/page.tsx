import { TFeed } from "@/app/types/feedsType";
import { revalidatePath } from "next/cache";
import Title from "../../_components/Title/Title";
import FeedsEditCard from "./_components/FeedsEditCard";

const AdminFeeds = async () => {
  async function getFeeds() {
    "use server";
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/feed`,
      { next: { revalidate: 10 } }
    );

    if (!res.ok) {
      console.log("Sem propriedades");
    }

    revalidatePath("/admin/feeds", "page");

    const data = await res.json();
    const feeds = data.feed;

    return feeds;
  }
  const feeds = await getFeeds();

  return (
    <main className="flex w-screen flex-col items-center justify-center pt-20">
      <Title className="my-14 text-[3rem]">Feeds cadastrados</Title>

      <div className="mb-20 flex w-[66.85rem] flex-wrap justify-center gap-20">
        {feeds.map((feed: TFeed) => (
          <FeedsEditCard
            key={feed._id}
            id={feed._id}
            video={feed.video}
            title={feed.title}
          />
        ))}
      </div>
    </main>
  );
};

export default AdminFeeds;
