import { authOptions } from "@/services/auth/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const PrivateRoutes = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin");
  }

  return <>{children}</>;
};

export default PrivateRoutes;
