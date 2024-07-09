import ContactUs from "@/app/_components/Footer/_components/ContactUs/ContactUs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/_components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserMenus = () => {
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");

  return (
    <div
      className={`${isAdmin === true ? "hidden" : "flex"} flex w-full justify-between`}
    >
      <Link
        href="/"
        className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname === "/" && "text-VIsecondary-color"}`}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("about") && "text-VIsecondary-color"}`}
      >
        Sobre nós
      </Link>

      <Link
        href="/register"
        className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("register") && "text-VIsecondary-color"}`}
      >
        Cadastre imóveis
      </Link>

      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <p className="hover:text-VIsecondary-color">Contato</p>
        </HoverCardTrigger>
        <HoverCardContent>
          <div>
            <ul className="flex flex-col gap-3 text-base lowercase text-VIprimary-color">
              <li className="flex gap-2">
                <Image
                  src="/Icons/phone-blue.svg"
                  alt="email"
                  width={24}
                  height={24}
                  sizes="100vw"
                />
                <ContactUs text="(79) 9 9910-2930" />
              </li>
              <li className="flex gap-2">
                <Image
                  src="/Icons/mail-blue.svg"
                  alt="email"
                  width={24}
                  height={24}
                  sizes="100vw"
                />
                vigorimob@hotmail.com
              </li>
              <li className="flex gap-2">
                <Link
                  href="http://www.instagram.com/vigor_imob"
                  className="flex"
                  legacyBehavior
                >
                  <a
                    className="flex gap-2 hover:cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Icons/instagram-blue.svg"
                      alt="email"
                      width={24}
                      height={24}
                      sizes="100vw"
                    />
                    @vigor_imob
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <Link
        href="/brokers"
        className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("brokers") && "text-VIsecondary-color"}`}
      >
        Corretores
      </Link>

      <Link
        href="/properties"
        className={`hover:border-b-2 hover:border-b-VIsecondary-color ${pathname.includes("properties") && "text-VIsecondary-color"}`}
      >
        Todos imóveis
      </Link>
    </div>
  );
};

export default UserMenus;
