"use client";

import Hero from "@/app/_components/Hero/Hero";
import Title from "@/app/_components/Title/Title";
import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();

  return (
    <main className="relative flex w-screen flex-col items-center justify-center py-16 pt-16">
      <Hero
        src="/Pages/properties/hero.png"
        alt="imóveis"
        title="Escolha seu imóvel"
        styles="desktop:h-[30rem] desktop:flex"
      />
      <Title className="mt-10">Erro ao buscar o imóvel</Title>
      <p>Entre em contato conosco!</p>
      <Button
        className="mt-10"
        onClick={() => {
          router.push("/");
        }}
      >
        Voltar
      </Button>
    </main>
  );
};

export default Error;
