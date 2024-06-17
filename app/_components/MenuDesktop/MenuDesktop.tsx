import Image from "next/image";
import Link from "next/link";

const MenuDesktop = () => {
  return (
    <nav className="absolute z-50 mt-7 flex h-[50%]  w-screen items-start justify-between px-32 font-archivo font-bold uppercase text-VIprimary-color drop-shadow-VI-white">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo imobiliária vigor"
          width={66}
          height={30}
          className="drop-shadow-VI-1"
        />
      </Link>

      <Link href="/">Home</Link>

      <Link href="/about">Sobre nós</Link>

      <Link href="/register">Cadastre imóveis</Link>

      <Link href="/brokers">Corretores</Link>

      <Link href="/properties">Todos imóveis</Link>
    </nav>
  );
};

export default MenuDesktop;
