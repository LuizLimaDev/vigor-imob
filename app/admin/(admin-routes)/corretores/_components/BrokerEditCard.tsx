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
import EditButton from "../../imoveis/_components/EditButton";
import DeleteButton from "./DeleteButton";

type TProps = {
  id: string;
  image: string;
  title: string;
};

const BrokerEditCard = ({ id, image, title }: TProps) => {
  async function deleteBroker(id: string) {
    "use server";
    const res = await fetch(
      `https://king-prawn-app-vxkkv.ondigitalocean.app/api/employ/${id}`,
      { method: "DELETE", cache: "no-store" }
    );

    if (!res.ok) return console.log(res.statusText);

    revalidatePath("admin/corretores");
    revalidatePath("/");

    console.log(res.statusText);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-7">
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className="h-[19.0625rem] w-[18.75rem] rounded-[.625rem]"
      />
      <Title className="text-2xl capitalize">{title}</Title>

      <div className="flex w-full justify-center gap-12">
        <EditButton id={id} page="corretores" />

        <Dialog>
          <DialogTrigger>
            <Image
              src="/Icons/delete.svg"
              alt="foto do imóvel"
              width={24}
              height={26}
              sizes="100vw"
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] rounded-md">
            <DialogHeader>
              <DialogTitle>Deletar propriedade</DialogTitle>
              <DialogDescription>
                Tem certeza que deseja deletar este corretor?
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="w-full flex-row items-center justify-center gap-6">
              <DeleteButton id={id} deleteBroker={deleteBroker} />
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

export default BrokerEditCard;
