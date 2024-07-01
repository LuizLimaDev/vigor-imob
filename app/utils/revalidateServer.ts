import { revalidatePath } from "next/cache";

const revalidateServer = (path: string) => {
  console.log(path, "page");
  revalidatePath(path, "page");
};

export default revalidateServer;
