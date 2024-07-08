"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { filterProperties, filterPropertiesCity } from "@/app/action/actions";

const MenuSliderProperties = ({ filterButtons, cities, searchParams }: any) => {
  const filter = searchParams.split("=")[1];

  function handleClick(item: string) {
    if (filter === item) {
      filterProperties([""]);
      return;
    }

    filterProperties([item]);
  }

  return (
    <div className="my-8 ml-5 flex gap-4 overflow-scroll desktop:z-50 desktop:my-16 desktop:items-center desktop:justify-center [&::-webkit-scrollbar]:hidden">
      {filterButtons.map((item: string, index: number) => (
        <p
          key={index}
          className={`${item === filter && "!border-VIprimary-color bg-VIprimary-color !text-VIligth-color"} flex h-[2.5rem] flex-col items-center justify-center rounded-[.5rem] border-[.0625rem] border-VIprimary-color p-3 font-archivo text-sm font-bold capitalize text-VIprimary-color hover:border-VIsecondary-color desktop:hover:text-VIsecondary-color `}
          onClick={() => handleClick(item)}
        >
          {item}
        </p>
      ))}

      <Select onValueChange={(e) => filterPropertiesCity(e)}>
        <SelectTrigger className="w-[11.25rem] border border-VIprimary-color desktop:flex desktop:justify-center desktop:gap-6">
          <SelectValue placeholder="Cidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-VIsecondary-color">
              Selecione uma cidade:
            </SelectLabel>
            {cities ? (
              cities.map((city: string, index: number) => (
                <SelectItem key={index} value={city}>
                  {city}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="Nenhuma">Sem cidade cadastrada</SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MenuSliderProperties;
