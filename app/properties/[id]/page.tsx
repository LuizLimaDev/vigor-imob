import ArrowBack from "@/app/_components/ArrowBack/ArrowBack";
import Hero from "@/app/_components/Hero/Hero";
import Title from "@/app/_components/Title/Title";
import Image from "next/image";
import Link from "next/link";
import propertiesDb from "../../../db/db.json";
import PhotoSlider from "./_components/PhotoSlider/PhotoSlider";
import PropertieInfo from "./_components/PropertieInfo/PropertieInfo";

const properties = propertiesDb.properties;
const encodeText =
  "Olá, me interessei sobre um empreendimento e gostaria de mais informações.";

const PropertiesDetail = ({ params }: { params: { id: number } }) => {
  const isPropertie = properties[params.id].propertie;

  return (
    <main className="relative w-screen py-16 desktop:flex desktop:flex-col desktop:items-center desktop:justify-center  desktop:pt-0">
      <Hero
        src="/Pages/properties/hero.png"
        alt="imóveis"
        title="Imóveis"
        styles="desktop:h-[25rem] zero:hidden desktop:flex"
      />

      <div className="mb-10 flex flex-col items-center desktop:my-20 desktop:flex desktop:flex-col desktop:items-center">
        <Title className="zero:hidden desktop:mb-4 desktop:block">
          Conheça o imóvel
        </Title>
        {/* TODO - por video yt no lugar da imagem */}
        <Image
          src="/video-properties-details.png"
          alt="imagem do imóvel"
          width={0}
          height={400}
          sizes="100vw"
          className="w-screen desktop:w-[577px]"
        />
      </div>

      <div className="pl-4 desktop:pl-20">
        {/* TODO - mudar o properties para a propriedade fotos de cada propriedade do json */}
        {/* TODO - adicionar no json uma propriedade[] com o src de todas as fotos da propriedade */}
        <PhotoSlider title={properties[params.id].title} photos={properties} />

        <div className="gap-14 desktop:mt-28 desktop:flex desktop:px-20">
          <div>
            <h1 className="mb-2 font-poppins text-2xl font-bold text-VIprimary-color">
              Paz e Tranquilidade
            </h1>

            <p className=" mb-9 pr-4 text-justify font-poppins text-xs font-light text-VIprimary-color">
              <span className="font-archivo text-2xl ">
                {properties[params.id].text.slice(0, 1)}
              </span>
              {properties[params.id].text.slice(1)}
            </p>

            {isPropertie && (
              <PropertieInfo
                size={properties[params.id].size}
                bedroom={properties[params.id].bedroom}
                bathroom={properties[params.id].bathroom}
                garage={properties[params.id].garage}
              />
            )}

            {isPropertie ? (
              <div className="mb-14 flex items-center justify-start gap-2 font-poppins text-sm font-bold text-VIsecondary-color desktop:mb-0">
                <Image
                  src="/Icons/location.svg"
                  alt="Localização"
                  width={22}
                  height={28}
                />

                <p>
                  {properties[params.id].street}, {properties[params.id].number}{" "}
                  -{properties[params.id].city} | {properties[params.id].state}
                </p>
              </div>
            ) : (
              <Link
                href={`https://wa.me//+5579999102930?text=${encodeText}`}
                className="mb-12 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-VIsecondary-color px-4 py-2 text-sm font-medium text-VIprimary-color ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Conversar com corretor
              </Link>
            )}
          </div>

          <Image
            src="/video-properties-details.png"
            alt="imagem do imóvel"
            width={577}
            height={491}
            sizes="100vw"
            className="zero:hidden desktop:flex"
          />
        </div>

        <ArrowBack />
      </div>
    </main>
  );
};

export default PropertiesDetail;
