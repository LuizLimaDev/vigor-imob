import Image from "next/image";

const ContactCard = () => {
  return (
    <>
      <ul className="absolute left-[49%] top-20 flex flex-col items-start justify-center gap-[.375rem] rounded-lg bg-VIsecondary-color p-3 font-archivo drop-shadow-VI-1">
        <li className="flex gap-2">
          <Image
            src="/Icons/phone-blue.svg"
            alt="email"
            width={24}
            height={24}
            sizes="100vw"
          />
          (79) 9 9910-2930
        </li>
        <li className="flex gap-2">
          <Image
            src="/Icons/mail-blue.svg"
            alt="email"
            width={24}
            height={24}
            sizes="100vw"
          />
          vigorimob@hotmail.com
        </li>
        <li className="flex gap-2">
          <Image
            src="/Icons/instagram-blue.svg"
            alt="email"
            width={24}
            height={24}
            sizes="100vw"
          />
          @vigor_imob
        </li>
      </ul>
    </>
  );
};

export default ContactCard;
