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
        <Link href="/admin/imovel">Imóvel</Link>

        <Link href="/admin/feed">Feed</Link>

        <Link href="/admin/corretores">Corretor</Link>
      </div>

      <Link href="/">Sair</Link>
    </div>
  );
};

export default AdminMenus;
