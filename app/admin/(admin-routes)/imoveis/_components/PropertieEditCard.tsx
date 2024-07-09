import Title from "@/app/_components/Title/Title";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

type TProps = {
  id: string;
  photo: string;
  title: string;
};

const PropertieEditCard = ({ id, photo, title }: TProps) => {
  async function deletePropertie(id: string) {
    "use server";
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/property/${id}`,
      { method: "DELETE", cache: "no-store" }
    );

    if (!res.ok) return console.log(res.statusText);

    revalidatePath("/admin/imoveis");
    revalidatePath("/properties");

    console.log(res.statusText);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-7">
      <Image
        src={photo}
        alt="foto do imóvel"
        width={0}
        height={0}
        sizes="100vw"
        className="h-[19.0625rem] w-[18.75rem]"
      />
      <Title className="text-2xl capitalize">{title}</Title>

      <div className="flex w-full justify-center gap-12">
        <EditButton id={id} page="imoveis" />
        <Dialog>
          <DialogTrigger>
            <Image
              src="/Icons/delete.svg"
              alt="deletar do imóvel"
              width={24}
              height={26}
              sizes="100vw"
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] rounded-md">
            <DialogHeader>
              <DialogTitle>Deletar propriedade</DialogTitle>
              <DialogDescription>
                Tem certeza que deseja deletar esta propriedade?
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="w-full flex-row items-center justify-center gap-6">
              <DeleteButton id={id} deleteProperty={deletePropertie} />
              <DialogClose asChild>
                <Button className="bg-red-500 text-VIligth-color">Não</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PropertieEditCard;
