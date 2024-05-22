import Title from "../Title/Title";

export type TProps = {
  children: React.ReactNode;
};

const SectionTitleBar = ({ children }: TProps) => {
  return (
    <div className="w-full rounded-bl-[2.5rem] rounded-tr-[2.5rem] bg-VIsecondary-color py-4">
      <Title>{children}</Title>
    </div>
  );
};

export default SectionTitleBar;
