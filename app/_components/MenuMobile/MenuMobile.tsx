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

      <Image
        src="/menu-hamburger.svg"
        alt="logo imobiliária vigor"
        width={17}
        height={8}
        className="drop-shadow-lg"
      />
    </div>
  );
};

export default MenuMobile;
