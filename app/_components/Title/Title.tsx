export type TProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TProps) => {
  return (
    <h1
      className={`text-center font-archivo font-bold uppercase text-VIprimary-color ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
