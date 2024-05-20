import Title from "../Title/Title";

export type TProps = {
  children: React.ReactNode;
};

const SectionTitleBar = ({ children }: TProps) => {
  return (
    <div className="w-full rounded-bl-[40px] rounded-tr-[40px] bg-VIsecondary-color py-4">
      <Title>{children}</Title>
    </div>
  );
};

export default SectionTitleBar;
