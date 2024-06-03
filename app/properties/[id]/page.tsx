import VideoPlayer from "@/app/_components/VideoPlayer/VideoPlayer";
import PhotoSlider from "./PhotoSlider/PhotoSlider";
import Image from "next/image";

const properties = [
  {
    id: 1,
    src: "/Pages/properties/properties-details/01.png",
    alt: "foto 01",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rerum necessitatibus provident amet accusantium aliquid labore nobis vitae. Earum amet labore tenetur porro placeat obcaecati accusamus enim eveniet maiores quasi! Corrupti vel officia dicta dolorem nostrum ut aperiam nobis ab quisquam iure cumque nam quos facilis quasi ipsa nemo soluta officiis, praesentium ullam consequatur aspernatur incidunt in inventore. Quam, aperiam doloribus. Nisi quam dolorem omnis praesentium est natus? Quaerat ratione ipsam inventore, necessitatibus eaque repellat voluptatum nemo totam voluptatibus obcaecati, nesciunt iure dolorum? Laborum molestias aliquid minus nobis voluptas dicta vero, repudiandae possimus reprehenderit ullam incidunt adipisci consequatur, quod saepe.",
    size: "100m²",
    bedroom: 1,
    bathroom: 1,
    garage: 1,
    street: "Rua dos Cajazeiros",
    number: "15-50",
    city: "Fortaleza",
    state: "CE",
  },
  {
    id: 2,
    src: "/Pages/properties/properties-details/02.png",
    alt: "foto 02",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rerum necessitatibus provident amet accusantium aliquid labore nobis vitae. Earum amet labore tenetur porro placeat obcaecati accusamus enim eveniet maiores quasi! Corrupti vel officia dicta dolorem nostrum ut aperiam nobis ab quisquam iure cumque nam quos facilis quasi ipsa nemo soluta officiis, praesentium ullam consequatur aspernatur incidunt in inventore. Quam, aperiam doloribus. Nisi quam dolorem omnis praesentium est natus? Quaerat ratione ipsam inventore, necessitatibus eaque repellat voluptatum nemo totam voluptatibus obcaecati, nesciunt iure dolorum? Laborum molestias aliquid minus nobis voluptas dicta vero, repudiandae possimus reprehenderit ullam incidunt adipisci consequatur, quod saepe.",
    size: "200m²",
    bedroom: 2,
    bathroom: 2,
    garage: 2,
    street: "Rua dos Cajazeiros",
    number: "15-50",
    city: "Fortaleza",
    state: "CE",
  },
  {
    id: 3,
    src: "/Pages/properties/properties-details/03.png",
    alt: "foto 03",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rerum necessitatibus provident amet accusantium aliquid labore nobis vitae. Earum amet labore tenetur porro placeat obcaecati accusamus enim eveniet maiores quasi! Corrupti vel officia dicta dolorem nostrum ut aperiam nobis ab quisquam iure cumque nam quos facilis quasi ipsa nemo soluta officiis, praesentium ullam consequatur aspernatur incidunt in inventore. Quam, aperiam doloribus. Nisi quam dolorem omnis praesentium est natus? Quaerat ratione ipsam inventore, necessitatibus eaque repellat voluptatum nemo totam voluptatibus obcaecati, nesciunt iure dolorum? Laborum molestias aliquid minus nobis voluptas dicta vero, repudiandae possimus reprehenderit ullam incidunt adipisci consequatur, quod saepe.",
    size: "300m²",
    bedroom: 3,
    bathroom: 3,
    garage: 3,
    street: "Rua dos Cajazeiros",
    number: "15-50",
    city: "Fortaleza",
    state: "CE",
  },
];

const PropertiesDetail = ({ params }: { params: { id: number } }) => {
  return (
    <main className="relative w-screen py-16">
      <VideoPlayer />

      <div className="pl-4">
        <PhotoSlider title="Loteamento Verão" photos={properties} />

        <h1 className="mb-2 font-poppins text-2xl font-bold text-VIprimary-color">
          Paz e Tranquilidade
        </h1>

        <p className=" mb-9 font-poppins text-xs font-light text-VIprimary-color">
          <span className="font-archivo text-2xl ">
            {properties[params.id].text.slice(0, 1)}
          </span>
          {properties[params.id].text.slice(1)}
        </p>

        {/* infos */}
        <div className="mb-9 flex w-full flex-wrap gap-4 font-poppins text-xs text-VIprimary-color">
          {/* size */}
          <div className="flex w-[9rem] items-end justify-start gap-2">
            <Image src="/Icons/size.svg" alt="tamanho" width={24} height={24} />
            <p>{properties[params.id].size}</p>
          </div>

          {/* bedroom */}
          <div className="flex w-[9rem] items-end justify-start gap-2">
            <Image
              src="/Icons/bedroom.svg"
              alt="quartos"
              width={30}
              height={22}
            />
            <p>
              {properties[params.id].bedroom} quarto
              {properties[params.id].bedroom > 1 ? "s" : ""}
            </p>
          </div>

          {/* bathroom */}
          <div className="flex w-[9rem] items-end justify-start gap-2">
            <Image
              src="/Icons/bathroom.svg"
              alt="banheiros"
              width={30}
              height={22}
            />
            <p>
              {properties[params.id].bedroom} banheiro
              {properties[params.id].bedroom > 1 ? "s" : ""}
            </p>
          </div>

          {/* garage */}
          <div className="flex items-end justify-start gap-2">
            <Image
              src="/Icons/car.svg"
              alt="banheiros"
              width={30}
              height={22}
            />
            <p>
              {properties[params.id].bedroom} carro
              {properties[params.id].bedroom > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-2 font-poppins text-sm font-bold text-VIsecondary-color">
          <Image
            src="/Icons/location.svg"
            alt="Localização"
            width={22}
            height={28}
          />

          <p>
            {properties[params.id].street}, {properties[params.id].number} -{" "}
            {properties[params.id].city} | {properties[params.id].state}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PropertiesDetail;
