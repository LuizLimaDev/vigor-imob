import Image from "next/image";
import RegisterForm from "./_components/RegisterFrom/RegisterFrom";

const Register = () => {
  return (
    <main className="pt-16">
      <div className="relative">
        <Image
          src="/Pages/register/hero.png"
          alt="registre seu imóvel"
          width={0}
          height={0}
          sizes="100vw"
          className="min-h-[11.5rem] w-full"
        />
        <h1 className="absolute left-[50%] top-[50%] w-full -translate-x-1/2 -translate-y-1/2 text-center font-archivo text-2xl font-bold uppercase text-VIprimary-color drop-shadow-VI-1">
          Cadastre seu imóvel
        </h1>
      </div>

      <div className="my-10">
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
