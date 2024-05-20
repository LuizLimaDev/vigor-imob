export type TProps = {
  children: React.ReactNode;
  secondary?: boolean;
};

const Button = ({ children, secondary }: TProps) => {
  return (
    <button
      className={`
        h-10 w-[98] rounded-md px-4 py-2 font-bold
				${
          secondary
            ? "bg-VIprimary-color text-VIligth-color"
            : "bg-VIsecondary-color text-VIprimary-color"
        }
			`}
    >
      {children}
    </button>
  );
};

export default Button;
