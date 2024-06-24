"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminMenus from "./_components/AdminMenus/AdminMenus";
import UserMenus from "./_components/UserMenus/UserMenus";

const MenuDesktop = () => {
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");

  return (
    <nav className="absolute z-40 mt-7 flex h-[50%]  w-screen items-start justify-between px-32 font-archivo font-bold uppercase text-VIprimary-color zero:hidden desktop:flex desktop:gap-10 desktop:align-middle">
      <Link href={isAdmin ? "/admin" : "/home"}>
        <Image
          src="/logo.svg"
          alt="logo imobiliária vigor"
          width={66}
          height={30}
          className="drop-shadow-VI-1"
        />
      </Link>

      <UserMenus />
      <AdminMenus />
    </nav>
  );
};

export default MenuDesktop;
