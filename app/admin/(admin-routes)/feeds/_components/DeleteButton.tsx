"use client";

import { Button } from "@/app/_components/ui/button";
import { DialogClose } from "@/app/_components/ui/dialog";

const DeleteButton = ({
  id,
  deleteFeed,
}: {
  id: string;
  // eslint-disable-next-line no-unused-vars
  deleteFeed: (id: string) => void;
}) => {
  return (
    <>
      <DialogClose asChild>
        <Button onClick={() => deleteFeed(id)} className="text-VIligth-color">
          Sim
        </Button>
      </DialogClose>
    </>
  );
};

export default DeleteButton;
