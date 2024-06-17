import Title from "../_components/Title/Title";

const Admin = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Title className="text-[4rem]">Bem vindo administrador!</Title>
      <p className="mt-4">Escolha um dos menus acima para continuar!</p>
    </main>
  );
};

export default Admin;
