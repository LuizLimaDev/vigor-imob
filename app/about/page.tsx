import Image from "next/image";
import QualitiesCard from "./_components/QualitiesCard/QualitiesCard";
import TestimonialCard from "./_components/TestimonialCard/TestimonialCard";

export default function About() {
  return (
    <main className="flex w-screen flex-col items-center justify-between bg-VIligth-color px-4 pt-16">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/Pages/about/01.png"
          alt="Sobre imobiliária vigor"
          width={358}
          height={263}
        />
        <h1 className="mt-6 text-center font-archivo font-extrabold text-VIprimary-color">
          A imobiliária mais conceituada da região
        </h1>
        <p className="mb-6 mt-3 text-center font-poppins text-xs font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          distinctio. Labore excepturi perspiciatis nesciunt veniam rerum magni
          incidunt molestias culpa nulla.
        </p>
      </div>

      <div className="my-6 flex flex-col items-center justify-center gap-12">
        <QualitiesCard
          src="/Pages/about/clock.png"
          alt="Sobre imobiliária vigor"
          title="Agilidade"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              distinctio. Labore excepturi perspiciatis nesciunt veniam rerum magni
              incidunt molestias culpa nulla.
            "
        />
        <QualitiesCard
          src="/Pages/about/shake-hands.png"
          alt="Sobre imobiliária vigor"
          title="Confiabilidade"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              distinctio. Labore excepturi perspiciatis nesciunt veniam rerum magni
              incidunt molestias culpa nulla.
            "
        />
        <QualitiesCard
          src="/Pages/about/price-up.png"
          alt="Sobre imobiliária vigor"
          title="Valorização"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              distinctio. Labore excepturi perspiciatis nesciunt veniam rerum magni
              incidunt molestias culpa nulla.
            "
        />
      </div>

      <div className="mt-8 flex w-full flex-col ">
        <Image
          src="/Pages/about/quotes.png"
          alt="reticencias"
          width={48}
          height={40}
          className="mb-2"
        />

        <div className="mb-20 flex flex-col">
          <h1 className="ml-2 justify-self-start font-archivo text-2xl font-extrabold capitalize">
            Histórias reais
          </h1>
          <h1 className="ml-2 justify-self-start font-archivo text-2xl font-extrabold capitalize">
            Clientes realizados
          </h1>
          <p className="mb-10 ml-5 justify-self-start font-archivo font-light">
            A sua história pode estar aqui!
          </p>

          <div className="flex flex-col items-center justify-center gap-10">
            <TestimonialCard
              avatar="/Pages/about/avatar-01.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem"
              name="Floyd Miles"
              venture="Residencial Verão"
            />
            <TestimonialCard
              avatar="/Pages/about/avatar-02.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
              name="Kristin Watson"
              venture="Residencial Outono"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
