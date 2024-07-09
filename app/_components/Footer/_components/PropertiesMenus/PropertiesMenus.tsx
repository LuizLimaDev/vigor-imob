"use client";

import { filterProperties } from "@/app/actions/actions";

const PropertiesMenus = () => {
  return (
    <ul className="flex flex-col items-center justify-center font-alegreya desktop:items-start">
      <li className="cursor-pointer" onClick={() => filterProperties([""])}>
        Todos
      </li>
      <li
        className="cursor-pointer"
        onClick={() => filterProperties(["novos"])}
      >
        Novos
      </li>
      <li
        className="cursor-pointer"
        onClick={() => filterProperties(["usados"])}
      >
        Usados
      </li>
      <li className="cursor-pointer" onClick={() => filterProperties([""])}>
        Loteamento
      </li>
      <li
        className="cursor-pointer"
        onClick={() => filterProperties(["comercial"])}
      >
        Comercial
      </li>
    </ul>
  );
};

export default PropertiesMenus;
