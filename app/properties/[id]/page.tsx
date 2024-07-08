import ArrowBack from "@/app/_components/ArrowBack/ArrowBack";
import { Tproperties } from "@/app/types/propertiesType";
import Image from "next/image";
import PhotoSlider from "./_components/PhotoSlider/PhotoSlider";
import PropertieInfo from "./_components/PropertieInfo/PropertieInfo";

const PropertiesDetail = async ({ params }: { params: { id: string } }) => {
  async function getProperties() {
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/property/${params.id}`
    );

    if (!res.ok) {
      throw new Error("Falha ao consultar o Banco de dados!");
    }

    return res.json();
  }
  const properties: Tproperties = await getProperties();

  return (
    <main className="relative w-screen py-16 desktop:flex desktop:flex-col desktop:items-center desktop:justify-center  desktop:pt-0">
      <iframe
        width="0"
        height="0"
        src={`${properties.video}&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-screen desktop:h-[30rem]"
      />

      <div className="pl-4 desktop:pl-20">
        <PhotoSlider title={properties.name} photos={properties.image} />

        <div className="gap-14 desktop:mt-28 desktop:flex desktop:px-20">
          <div className="desktop:min-w-[50%]">
            <h1 className="mb-2 font-poppins text-2xl font-bold text-VIprimary-color">
              {properties.title}
            </h1>

            <p className=" mb-9 pr-4 text-justify font-poppins text-xs font-light text-VIprimary-color">
              <span className="font-archivo text-2xl ">
                {properties.description.slice(0, 1)}
              </span>
              {properties.description.slice(1)}
            </p>

            <PropertieInfo
              size={properties.area}
              bedroom={properties.rooms}
              bathroom={properties.bathrooms}
              garage={properties.garage}
              price={properties.price}
              rent={properties.rent}
              taxe={properties.taxe}
            />

            <div className="mb-14 flex items-center justify-start gap-2 font-poppins text-sm font-bold text-VIsecondary-color desktop:mb-0">
              <Image
                src="/Icons/location.svg"
                alt="Localização"
                width={22}
                height={28}
              />

              <p>
                {properties.city} | {properties.state}
              </p>
            </div>
          </div>

          <iframe
            width="577"
            height="491"
            src={properties.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-[0.5rem]"
          />
        </div>

        <ArrowBack />
      </div>
    </main>
  );
};

export default PropertiesDetail;
