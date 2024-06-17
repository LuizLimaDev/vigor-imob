import Image from "next/image";
import Link from "next/link";
import ContactUs from "./ContactUs/ContactUs";

const Footer = () => {
  return (
    <footer
      className="
        desktop:m-w-[59.875rem] flex w-full flex-col items-center justify-center bg-VIprimary-color px-[5.687rem] py-[3.125rem]  
      "
    >
      <div className="desktop:flex-col ">
        <div className="desktop:flex desktop:gap-24">
          <div>
            <Image
              src="/logo.svg"
              alt="logo imobiliaria vigor"
              width={177}
              height={80}
              className="mb-20 desktop:mb-4"
            />
            <p className="hidden text-center font-archivo text-[10px] font-light text-VIligth-color desktop:block">
              CRECI - PJT: 271
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-12 desktop:flex-row desktop:items-start desktop:justify-start">
            <div className="flex flex-col items-center justify-center text-VIligth-color desktop:items-start desktop:justify-start">
              <div className="border-red mb-5 w-[12.5rem] border-b">
                <h5 className="text-center font-archivo text-sm uppercase desktop:text-start">
                  Institucional
                </h5>
              </div>

              <ul className="flex flex-col items-center justify-center font-alegreya desktop:items-start desktop:justify-start">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">Sobre nós</Link>
                </li>
                <li>
                  <ContactUs />
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center text-VIligth-color desktop:items-start desktop:justify-start">
              <div className="border-red mb-5 w-[12.5rem] border-b">
                <h5 className="text-center font-archivo text-sm uppercase desktop:text-start">
                  Imóveis
                </h5>
              </div>

              <ul className="flex flex-col items-center justify-center font-alegreya desktop:items-start">
                <li>Todos</li>
                <li>Novos</li>
                <li>Usados</li>
                <li>Loteamento</li>
                <li>Comercial</li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center text-VIligth-color desktop:items-start desktop:justify-start">
              <div className="border-red mb-5 w-[12.5rem] border-b">
                <h5 className="text-center font-archivo text-sm uppercase desktop:text-start">
                  Contato
                </h5>
              </div>

              <ul className="flex flex-col items-center justify-center gap-[.375rem] font-alegreya">
                <li className="flex gap-2">
                  <Image
                    src="/Icons/mail.svg"
                    alt="email"
                    width={24}
                    height={24}
                  />
                  vigorimob@hotmail.com
                </li>
                <li className="flex gap-2">
                  <Image
                    src="/Icons/whats.svg"
                    alt="email"
                    width={24}
                    height={24}
                  />
                  (79) 9 9910-2930
                </li>
                <li className="flex gap-2">
                  <Image
                    src="/Icons/instagram.svg"
                    alt="email"
                    width={24}
                    height={24}
                  />
                  @vigor_imob
                </li>
                <li className="flex gap-2 desktop:hidden">
                  <Image
                    src="/Icons/creci.svg"
                    alt="creci"
                    width={24}
                    height={24}
                  />
                  CRECI - PTJ: 271
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-[.55rem] text-VIligth-color">
          <p>Copyright© - Desenvolvido por</p>
          <p>Luiz Lima & João Fagundes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
