import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import Image from "next/image";

const MenuMobile = () => {
  return (
    <div className="absolute flex w-screen items-center justify-between px-4 pt-2">
      <Image
        src="/logo.png"
        alt="logo imobiliária vigor"
        width={66}
        height={30}
        className="drop-shadow-lg"
      />

      <Sheet>
        <SheetTrigger>
          <Image
            src="/menu-hamburger.svg"
            alt="logo imobiliária vigor"
            width={17}
            height={8}
            className="drop-shadow-lg"
          />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="w-[100.2%] -translate-x-[.3%]">
            <SheetTitle className="flex flex-col items-center justify-center bg-VIsecondary-color py-4">
              <Image
                src="/logo-blue.png"
                alt="logo imobiliária vigor"
                width={101}
                height={46}
                className="drop-shadow-lg"
              />
            </SheetTitle>
          </SheetHeader>

          <SheetDescription className="py-10 pl-10">
            <ul>
              <li className="mb-[3.125rem] text-left font-archivo font-bold uppercase text-VIprimary-color drop-shadow-sm">
                Home
              </li>
              <li className="mb-[3.125rem] text-left font-archivo font-bold uppercase text-VIprimary-color drop-shadow-sm">
                Sobre nós
              </li>
              <li className="mb-[3.125rem] text-left font-archivo font-bold uppercase text-VIprimary-color drop-shadow-sm">
                Cadastre imóveis
              </li>
              <li className="mb-[3.125rem] text-left font-archivo font-bold uppercase text-VIprimary-color drop-shadow-sm">
                Contato
              </li>
              <li className="mb-[3.125rem] text-left font-archivo font-bold uppercase text-VIprimary-color drop-shadow-sm">
                Corretores
              </li>
              <li className="mb-[3.125rem] text-left font-archivo font-bold uppercase text-VIprimary-color drop-shadow-sm">
                Todos imóveis
              </li>
            </ul>
          </SheetDescription>

          <div className="absolute -left-[0.3%] bottom-0 w-[100.2%] bg-VIprimary-color py-5 pl-3 text-VIligth-color">
            <p>footer</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuMobile;
