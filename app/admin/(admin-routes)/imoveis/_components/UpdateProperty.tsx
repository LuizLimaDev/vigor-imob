"use client";

import { Button } from "@/app/_components/ui/button";

const UpdateProperty = ({
  editProperty,
  id,
}: {
  // eslint-disable-next-line no-unused-vars
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
