"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const EditButton = ({ id, page }: { id: string; page: string }) => {
  const router = useRouter();
  return (
    <>
      <Image
        src="/Icons/edit.svg"
        alt="editar do imóvel"
        width={25}
        height={25}
        sizes="100vw"
        onClick={() => router.push(`/admin/${page}/${id}`)}
        className="cursor-pointer"
      />
    </>
  );
};

export default EditButton;
