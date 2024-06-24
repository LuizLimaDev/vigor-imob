import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminMenus = () => {
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");

  return (
    <div
      className={`${isAdmin === true ? "flex" : "hidden"} flex w-full justify-between`}
    >
      <div className="flex w-[80%] justify-between">
        <Link href="/admin/cadastrarimovel">Cadastrar imóvel</Link>
        <Link href="/admin/feed">Feed</Link>
        <Link href="/admin/corretores">Corretor</Link>
        <Link href="/admin/imoveiscadastrados">Imóveis cadastrados</Link>
      </div>

      <Link href="/" className="text-red-600">
        Sair
      </Link>
    </div>
  );
};

export default AdminMenus;
