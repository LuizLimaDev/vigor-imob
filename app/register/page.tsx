import RegisterForm from "./_components/RegisterFrom/RegisterFrom";
import Hero from "../_components/Hero/Hero";

const Register = () => {
  return (
    <main className="flex w-screen flex-col items-center justify-center desktop:pr-4">
      <div className="relative w-full">
        <Hero
          src="/Pages/register/hero.png"
          alt="Cadastre seu imóvel"
          title="Cadastre seu imóvel"
        />
      </div>

      <div className="mx-2 my-10 w-[98%] rounded-[.5rem] bg-[#F7FAFE] py-4">
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
