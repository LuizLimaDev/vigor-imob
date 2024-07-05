"use client";

import { Button } from "@/app/_components/ui/button";

const UpdateProperty = ({
  editProperty,
  id,
}: {
  editProperty: (id: string) => void;
  id: string;
}) => {
  return (
    <>
      <Button onClick={() => editProperty(id)} className="text-VIligth-color">
        Atualizar
      </Button>
    </>
  );
};

export default UpdateProperty;
