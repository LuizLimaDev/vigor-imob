"use client";

import { whatsMsg } from "@/lib/whatsAppMsg";
import { useRouter } from "next/navigation";

const ContactUs = ({ text }: { text: string }) => {
  const router = useRouter();

  function sendMessage() {
    router.push(
      whatsMsg(
        "Olá, me interessei sobre um empreendimento que visualizei no site.Gostaria de saber mais informações."
      )
    );
  }

  return (
    <>
      <p onClick={sendMessage} className="cursor-pointer">
        {text}
      </p>
    </>
  );
};

export default ContactUs;
