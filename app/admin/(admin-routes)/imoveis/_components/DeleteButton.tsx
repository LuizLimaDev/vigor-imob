"use client";

import { Button } from "@/app/_components/ui/button";
import { DialogClose } from "@/app/_components/ui/dialog";

export type TProps = {
  id: string;
  // eslint-disable-next-line no-unused-vars
  deleteProperty: (id: string) => void;
};

const DeleteButton = ({ id, deleteProperty }: TProps) => {
  return (
    <>
      <DialogClose asChild>
        <Button
          onClick={() => deleteProperty(id)}
          className="text-VIligth-color"
        >
          Sim
        </Button>
      </DialogClose>
    </>
  );
};

export default DeleteButton;
