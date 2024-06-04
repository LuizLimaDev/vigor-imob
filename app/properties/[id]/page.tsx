import VideoPlayer from "@/app/_components/VideoPlayer/VideoPlayer";
import PhotoSlider from "./_components/PhotoSlider/PhotoSlider";
import Image from "next/image";
import propertiesDb from "../../../db/db.json";
import ArrowBack from "@/app/_components/ArrowBack/ArrowBack";
import PropertieInfo from "./_components/PropertieInfo/PropertieInfo";
import Link from "next/link";

const properties = propertiesDb.properties;
const encodeText =
  "Olá, me interessei sobre um empreendimento e gostaria de mais informações.";

const PropertiesDetail = ({ params }: { params: { id: number } }) => {
  const isPropertie = properties[params.id].propertie;

  return (
    <main className="relative w-screen py-16">
      <VideoPlayer />

      <div className="pl-4">
        {/* TODO - mudar o properties para a propriedade fotos de cada propriedade do json */}
        {/* TODO - adicionar no json uma propriedade[] com o src de todas as fotos da propriedade */}
        <PhotoSlider title={properties[params.id].title} photos={properties} />

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
          <div className="mb-14 flex items-center justify-start gap-2 font-poppins text-sm font-bold text-VIsecondary-color">
            <Image
              src="/Icons/location.svg"
              alt="Localização"
              width={22}
              height={28}
            />

            <p>
              {properties[params.id].street}, {properties[params.id].number} -
              {properties[params.id].city} | {properties[params.id].state}
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

        <ArrowBack />
      </div>
    </main>
  );
};

export default PropertiesDetail;
