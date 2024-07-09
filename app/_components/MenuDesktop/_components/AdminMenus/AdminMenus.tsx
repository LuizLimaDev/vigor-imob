import { deleteCookies } from "@/app/actions/deleteCookies";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminMenus = () => {
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");

  async function handleLogOut() {
    await signOut({ callbackUrl: "/", redirect: true });
    deleteCookies();
  }

  return (
    <div
      className={`${isAdmin === true ? "flex" : "hidden"} flex w-full justify-between`}
    >
      <div className="flex w-[90%] items-center justify-between text-sm">
        <Link
          href="/admin/editarhome"
          className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("cadastrarcorretor") && "text-VIsecondary-color"}`}
        >
          Editar Home
        </Link>
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

      <button className="text-red-600" onClick={() => handleLogOut()}>
        Sair
      </button>
    </div>
  );
};

export default AdminMenus;
