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

const MenuSliderProperties = () => {
  return (
    <div className="my-8 ml-5 flex gap-4 overflow-scroll [&::-webkit-scrollbar]:hidden">
      {filterButtons.map((item, index) => (
        <p
          key={index}
          className="rounded-[.5rem] border-[.0625rem] border-VIprimary-color p-3 font-archivo text-sm font-bold text-VIprimary-color"
        >
          {item}
        </p>
      ))}

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-VIsecondary-color">
              Cidades
            </SelectLabel>
            <SelectItem value="apple">São Paulo</SelectItem>
            <SelectItem value="banana">Fortaleza</SelectItem>
            <SelectItem value="blueberry">Rio de janeiro</SelectItem>
            <SelectItem value="grapes">Bahia</SelectItem>
            <SelectItem value="pineapple">João Pessoa</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MenuSliderProperties;
