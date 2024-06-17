import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminMenus = () => {
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");

  return (
    <div
      className={`${isAdmin === true ? "flex" : "hidden"} flex w-full justify-between`}
    >
      <div className="flex w-[30%] justify-between">
        <Link href="/adminproperties">Imóveis</Link>

        <Link href="/adminfeed">Feed</Link>

        <Link href="/adminbrokers">Corretores</Link>
      </div>

      <Link href="/home">Sair</Link>
    </div>
  );
};

export default AdminMenus;
