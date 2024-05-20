import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="
        flex w-full flex-col items-center justify-center bg-VIprimary-color px-[91px] py-[50px]
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
          <div className="border-red mb-5 w-[200px] border-b">
            <h5 className="text-center font-archivo text-sm uppercase">
              Institucional
            </h5>
          </div>

          <ul className="flex flex-col items-center justify-center font-alegreya">
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Fale conosco</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center text-VIligth-color">
          <div className="border-red mb-5 w-[200px] border-b">
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
          <div className="border-red mb-5 w-[200px] border-b">
            <h5 className="text-center font-archivo text-sm uppercase">
              Contato
            </h5>
          </div>

          <ul className="flex flex-col items-center justify-center gap-[6px] font-alegreya">
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
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
