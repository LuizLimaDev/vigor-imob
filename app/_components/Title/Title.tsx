export type TProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TProps) => {
  return (
    <h1
      className={`${className} text-center font-archivo text-base font-bold uppercase text-VIprimary-color`}
    >
      {children}
    </h1>
  );
};

export default Title;
