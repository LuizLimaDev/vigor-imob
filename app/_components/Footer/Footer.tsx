import Image from "next/image";
import Link from "next/link";
import ContactUs from "./ContactUs/ContactUs";

const Footer = () => {
  return (
    <footer
      className="
        flex w-full flex-col items-center justify-center bg-VIprimary-color px-[5.687rem] py-[3.125rem]
      "
    >
      <Image
        src="/logo.png"
        alt="logo imobiliaria vigor"
        width={177}
        height={80}
        className="mb-20"
      />

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center text-VIligth-color">
          <div className="border-red mb-5 w-[12.5rem] border-b">
            <h5 className="text-center font-archivo text-sm uppercase">
              Institucional
            </h5>
          </div>

          <ul className="flex flex-col items-center justify-center font-alegreya">
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

        <div className="flex flex-col items-center justify-center text-VIligth-color">
          <div className="border-red mb-5 w-[12.5rem] border-b">
            <h5 className="text-center font-archivo text-sm uppercase">
              Imóveis
            </h5>
          </div>

          <ul className="flex flex-col items-center justify-center font-alegreya">
            <li>Todos</li>
            <li>Novos</li>
            <li>Usados</li>
            <li>Loteamento</li>
            <li>Comercial</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center text-VIligth-color">
          <div className="border-red mb-5 w-[12.5rem] border-b">
            <h5 className="text-center font-archivo text-sm uppercase">
              Contato
            </h5>
          </div>

          <ul className="flex flex-col items-start justify-center gap-[.375rem] font-alegreya">
            <li className="flex gap-2">
              <Image src="/Icons/mail.svg" alt="email" width={24} height={24} />
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
            <li className="flex gap-2">
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

        <div className="text-center text-[.55rem] text-VIligth-color">
          <p>Copyright© - Desenvolvido por</p>
          <p>Luiz Lima & João Fagundes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
