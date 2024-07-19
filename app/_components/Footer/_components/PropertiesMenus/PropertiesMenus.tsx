"use client";

import { filterProperties } from "@/app/actions/actions";
import { useRouter } from "next/navigation";

function scrollToTop() {
  window.scrollTo({ top: 400, behavior: "smooth" });
}

const PropertiesMenus = () => {
  const router = useRouter();

  return (
    <ul className="flex flex-col items-center justify-center font-alegreya desktop:items-start">
      <li
        className="cursor-pointer"
        onClick={() => {
          router.push("/properties");
          scrollToTop();
        }}
      >
        Todos
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          filterProperties("novos");
          scrollToTop();
        }}
      >
        Novos
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          filterProperties("usados");
          scrollToTop();
        }}
      >
        Usados
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          router.push("/properties");
          scrollToTop();
        }}
      >
        Loteamento
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          filterProperties("comercial");
          scrollToTop();
        }}
      >
        Comercial
      </li>
    </ul>
  );
};

export default PropertiesMenus;
