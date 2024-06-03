import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import FooterItem from "./FooterItem/FooterItem";

const MenuMobile = () => {
  return (
    <div className="absolute z-40 flex w-screen items-center justify-between px-4 pt-2">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo imobiliária vigor"
          width={66}
          height={30}
          className="drop-shadow-VI-1"
        />
      </Link>

      <Sheet>
        <SheetTrigger>
          <Image
            src="/menu-hamburger.svg"
            alt="logo imobiliária vigor"
            width={0}
            height={0}
            sizes="100vw"
            className="drop-shadow-VI-white mr-3 h-[.5rem] w-[1.062rem]"
          />
        </SheetTrigger>

        <SheetContent>
          <div className="pt1- flex h-full w-full -translate-x-[.3%] flex-col justify-between">
            <div className="flex h-[4.85rem] w-[100.3%] items-center justify-center bg-VIsecondary-color">
              <Image
                src="/logo-blue.png"
                alt="logo imobiliária vigor"
                width={101}
                height={46}
                className="drop-shadow-VI-2"
              />
            </div>
            <div className="ml-10 flex h-[50%] flex-col items-start justify-between font-archivo font-bold uppercase text-VIprimary-color drop-shadow-md">
              <Link href="/">
                <SheetClose className="uppercase">Home</SheetClose>
              </Link>

              <Link href="/about">
                <SheetClose className="uppercase">Sobre nós</SheetClose>
              </Link>

              <Link href="/register">
                <SheetClose className="uppercase">Cadastre imóveis</SheetClose>
              </Link>

              <Link href="/brokers">
                <SheetClose className="uppercase">Corretores</SheetClose>
              </Link>

              <Link href="/properties">
                <SheetClose className="uppercase">Todos imóveis</SheetClose>
              </Link>

              <SheetClose className="uppercase">Sair </SheetClose>
            </div>

            <div className="flex w-[100.3%] flex-col gap-4 bg-VIprimary-color py-5 pl-10 text-VIligth-color">
              <FooterItem
                src="/Icons/phone.svg"
                alt="telefone"
                text="(79) 9 9910-2930"
              />
              <FooterItem
                src="/Icons/mail.svg"
                alt="email"
                text="vigorimob@hotmail.com"
              />
              <FooterItem
                src="/Icons/instagram.svg"
                alt="instagram"
                text="@vigor_imob"
              />
              <FooterItem
                src="/Icons/id.svg"
                alt="creci"
                text="CRECI - PTJ: 271"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuMobile;
