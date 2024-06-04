"use client";

import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  const encodeText =
    "Olá, me interessei sobre um empreendimento e gostaria de mais informações.";
  const whatsMsg = `https://wa.me//+5579999102930?text=${encodeText}`;

  function sendMessage() {
    router.push(whatsMsg);
  }

  return (
    <>
      <p onClick={sendMessage}>Fale conosco</p>
    </>
  );
};

export default ContactUs;
