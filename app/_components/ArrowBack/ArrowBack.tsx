"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ArrowBack = () => {
  const router = useRouter();

  return <ArrowLeft color="#03045E" onClick={router.back} />;
};

export default ArrowBack;
