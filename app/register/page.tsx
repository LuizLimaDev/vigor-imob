import RegisterForm from "./_components/RegisterFrom/RegisterFrom";
import Hero from "../_components/Hero/Hero";

const Register = () => {
  return (
    <main className="pt-16">
      <div className="relative">
        <Hero
          src="/Pages/register/hero.png"
          alt="Cadastre seu imóvel"
          title="Cadastre seu imóvel"
        />
      </div>

      <div className="my-10">
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
