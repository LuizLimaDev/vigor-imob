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
      <Link href="/">Home</Link>

      <Link href="/about">Sobre nós</Link>

      <Link href="/register">Cadastre imóveis</Link>

      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <p>Contato</p>
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
                (79) 9 9910-2930
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

      <Link href="/brokers">Corretores</Link>

      <Link href="/properties">Todos imóveis</Link>
    </div>
  );
};

export default UserMenus;
