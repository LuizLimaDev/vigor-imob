"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ArrowBack = () => {
  const router = useRouter();

  return (
    <ArrowLeft
      color="#03045E"
      onClick={router.back}
      className="h-10 w-10 cursor-pointer desktop:mt-10"
    />
  );
};

export default ArrowBack;
