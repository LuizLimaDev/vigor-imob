"use client";

import { filterProperties } from "@/app/actions/actions";

function scrollToTop() {
  window.scrollTo({ top: 400, behavior: "smooth" });
}

const PropertiesMenus = () => {
  return (
    <ul className="flex flex-col items-center justify-center font-alegreya desktop:items-start">
      <li
        className="cursor-pointer"
        onClick={() => {
          filterProperties([""]);
          scrollToTop();
        }}
      >
        Todos
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          filterProperties(["novos"]);
          scrollToTop();
        }}
      >
        Novos
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          filterProperties(["usados"]);
          scrollToTop();
        }}
      >
        Usados
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          filterProperties([""]);
          scrollToTop();
        }}
      >
        Loteamento
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          filterProperties(["comercial"]);
          scrollToTop();
        }}
      >
        Comercial
      </li>
    </ul>
  );
};

export default PropertiesMenus;
