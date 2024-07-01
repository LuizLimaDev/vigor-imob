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
        <Link
          href="/admin/imoveis"
          className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("imoveis") && "text-VIsecondary-color"}`}
        >
          Imóveis
        </Link>
        <Link
          href="/admin/cadastrarimovel"
          className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("cadastrarimovel") && "text-VIsecondary-color"}`}
        >
          Cadastrar imóvel
        </Link>
        <Link
          href="/admin/feeds"
          className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("feeds") && "text-VIsecondary-color"}`}
        >
          Feeds
        </Link>
        <Link
          href="/admin/cadastrarfeed"
          className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("cadastrarfeed") && "text-VIsecondary-color"}`}
        >
          Cadastrar Feed
        </Link>
        <Link
          href="/admin/corretores"
          className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("corretores") && "text-VIsecondary-color"}`}
        >
          Corretores
        </Link>
        <Link
          href="/admin/cadastrarcorretor"
          className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("cadastrarcorretor") && "text-VIsecondary-color"}`}
        >
          Cadastrar Corretor
        </Link>
      </div>

      <Link href="/" className="text-red-600">
        Sair
      </Link>
    </div>
  );
};

export default AdminMenus;
