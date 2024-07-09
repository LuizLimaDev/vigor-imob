import Title from "@/app/_components/Title/Title";

export type TProps = {
  children: React.ReactNode;
};

const SectionTitleBar = ({ children }: TProps) => {
  return (
    <div className="mb-4 mt-4 w-full rounded-bl-[2.5rem] rounded-tr-[2.5rem] bg-VIsecondary-color py-4 desktop:mt-10 desktop:rounded-none desktop:bg-VIligth-color">
      <Title>{children}</Title>
    </div>
  );
};

export default SectionTitleBar;
