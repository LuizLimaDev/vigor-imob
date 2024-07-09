import Image from "next/image";
import QualitiesCard from "./_components/QualitiesCard/QualitiesCard";
import TestimonialCard from "./_components/TestimonialCard/TestimonialCard";

export default function About() {
  return (
    <main className="flex w-screen flex-col items-center justify-center bg-VIligth-color px-4 pt-16 desktop:justify-center desktop:px-24">
      <div className="flex flex-col items-center justify-center desktop:mt-16 desktop:flex-row-reverse desktop:gap-20 ">
        <Image
          src="/Pages/about/01.png"
          alt="Sobre imobiliária vigor"
          width={358}
          height={263}
        />
        <div className="desktop:w-[38rem] desktop:items-start desktop:justify-start">
          <h1 className="mt-6 text-center font-archivo font-extrabold text-VIprimary-color desktop:h-[14.56rem] desktop:text-left desktop:text-[4rem] desktop:leading-[4rem]">
            A imobiliária mais conceituada da região
          </h1>
          <p className="mb-6 mt-3 text-center font-poppins text-xs font-light desktop:mt-0 desktop:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            distinctio. Labore excepturi perspiciatis nesciunt veniam rerum
            magni incidunt molestias culpa nulla.
          </p>
        </div>
      </div>

      <div className="my-6 flex flex-col items-center justify-center gap-12 desktop:mt-28 desktop:flex-row">
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
              avatar="/Pages/about/avatar-01.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elem"
              name="Floyd Miles"
              venture="Residencial Verão"
              styles="desktop:max-w-[21.875rem] desktop:mt-[4rem]"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-10 desktop:items-start desktop:justify-start">
            <TestimonialCard
              avatar="/Pages/about/avatar-02.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
              name="Kristin Watson"
              venture="Residencial Outono"
              styles="desktop:max-w-[27.812rem] desktop:h-[21,25rem]"
            />
            <TestimonialCard
              avatar="/Pages/about/avatar-03.png"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
              name="Junne Taylor"
              venture="Residencial Outono"
              styles="desktop:max-w-[21.875rem] desktop:h-[17.25rem]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
