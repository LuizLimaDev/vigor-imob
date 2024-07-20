import Image from "next/image";
import QualitiesCard from "./_components/QualitiesCard/QualitiesCard";
import TestimonialCard from "./_components/TestimonialCard/TestimonialCard";

export default function About() {
  return (
    <main className="flex w-screen flex-col items-center justify-center bg-VIligth-color px-4 pt-16 desktop:justify-center desktop:px-24">
      <div className="flex flex-col items-center justify-center desktop:mt-16  desktop:flex-row-reverse">
        <Image
          src="/Pages/about/01.jpg"
          alt="Sobre imobiliária vigor"
          width={600}
          height={600}
          className="rounded-md"
        />
        <div className="desktop:max-w-2xl desktop:items-start desktop:justify-between desktop:pr-10">
          <h1 className=" mt-6 text-center font-archivo font-extrabold text-VIprimary-color desktop:text-left desktop:text-[4rem] desktop:leading-[4rem]">
            Mais que uma imobiliária, uma família para cuidar da sua
          </h1>
          <p className="mb-6 mt-3 text-center font-poppins text-xs font-light desktop:mt-2 desktop:text-left">
            A vigor imobiliária surgiu com o intuito de realizar um dos sonhos
            mais importantes de qualquer ser humano: A casa própria. Mas como
            todo bom ambiente de negócios muitas oportunidades de ganhar muito
            dinheiro surgem aqui também, pode entrar a casa é sua.
          </p>
        </div>
      </div>

      <div className="my-6 flex flex-col items-center justify-center gap-12 desktop:mt-28 desktop:flex-row desktop:items-start">
        <QualitiesCard
          src="/Pages/about/clock.png"
          alt="Sobre imobiliária vigor"
          title="Agilidade"
          text="Mesmo a despeito da grande demanda
            Nossa equipe está preparada para te atender 
            Da melhor forma e o mais rápido possível.
          "
        />
        <QualitiesCard
          src="/Pages/about/shake-hands.png"
          alt="Sobre imobiliária vigor"
          title="Confiabilidade"
          text="Há mais de doze anos no mercado imobiliário
            Realizando sonhos e  ajudando famílias.
          "
        />
        <QualitiesCard
          src="/Pages/about/price-up.png"
          alt="Sobre imobiliária vigor"
          title="Investimento"
          text="Realizar o sonho da casa própria é maravilhoso
            Mas fazer isso colocando dinheiro no bolso
            É melhor ainda. Muitos dos nossos imóveis são
            Ótimas oportunidades de investimento.
          "
        />
      </div>

      <div className="mt-8 flex w-[20.875rem] flex-col items-center justify-center desktop:mt-24 desktop:w-full desktop:max-w-[67.625rem]">
        <Image
          src="/Pages/about/quotes.png"
          alt="reticencias"
          width={0}
          height={0}
          sizes="100vw"
          className="mb-2 h-[2.5rem] w-[3rem] self-start desktop:h-[7.5rem] desktop:w-[8.937rem] desktop:self-start "
        />

        <div className="mb-20 flex flex-col desktop:flex-row desktop:justify-center desktop:gap-8">
          <div className="mb-10">
            <div className="desktop:absolute desktop:-mt-14 desktop:ml-6">
              <h1 className="ml-2 justify-self-start font-archivo text-2xl font-extrabold capitalize">
                Histórias reais
              </h1>
              <h1 className="ml-2 justify-self-start font-archivo text-2xl font-extrabold capitalize">
                Clientes realizados
              </h1>
              <p className="mb-10 ml-5 justify-self-start font-archivo font-light">
                A sua história pode estar aqui!
              </p>
            </div>
            <TestimonialCard
              avatar="/about/marcio-santos.jpg"
              text="Um dos meus maiores sonhos era o de conseguir
                A minha casa própria pelo programa Minha Casa Minha Vida
                O que eu consegui graças a Vigor Imobiliária e equipe."
              name="Marcio Santos"
              styles="desktop:max-w-[21.875rem] desktop:mt-[4rem]"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-10 desktop:items-start desktop:justify-start">
            <TestimonialCard
              avatar="/about/carla-melo.jpg"
              text=" Sou muito Grata, a VIGOR IMOBILIÁRIA e toda a sua 
                Equipe pelo apoio incondicional durante a compra do 
                Meu AP, e do meu financiamento."
              name="Carla Melo"
              styles="desktop:max-w-[27.812rem] desktop:h-[21,25rem]"
            />
            <TestimonialCard
              avatar="/about/renata-souza.jpg"
              text="Com muito esforço conseguir juntar cada centavo
                Necessário para comprar a minha casinha e isso agradeço
                A Vigor imobiliária e equipe."
              name="Renata Souza"
              styles="desktop:max-w-[21.875rem] desktop:h-[17.25rem]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
