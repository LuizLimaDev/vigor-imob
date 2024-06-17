import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

const filterButtons = ["Todos", "Novos", "Usados", "Loteamento"];
const cities = [
  "São Paulo",
  "Fortaleza",
  "Rio de janeiro",
  "Bahia",
  "João Pessoa",
];

const MenuSliderProperties = () => {
  return (
    <div className="my-8 ml-5 flex gap-4 overflow-scroll desktop:my-16 desktop:items-center desktop:justify-center [&::-webkit-scrollbar]:hidden">
      {filterButtons.map((item, index) => (
        <p
          key={index}
          className="flex h-[2.5rem] flex-col items-center justify-center rounded-[.5rem] border-[.0625rem] border-VIprimary-color p-3 font-archivo text-sm font-bold text-VIprimary-color desktop:hover:text-VIsecondary-color"
        >
          {item}
        </p>
      ))}

      <Select>
        <SelectTrigger className="w-[11.25rem] border border-VIprimary-color desktop:flex desktop:justify-center desktop:gap-6">
          <SelectValue placeholder="Cidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-VIsecondary-color">
              Selecione uma cidade:
            </SelectLabel>
            {cities.map((city, index) => (
              <SelectItem key={index} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MenuSliderProperties;
