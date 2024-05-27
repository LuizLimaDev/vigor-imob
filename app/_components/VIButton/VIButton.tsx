export type TProps = {
  children: React.ReactNode;
  secondary?: boolean;
  type?: "button" | "submit" | "reset";
};

const VIButton = ({ children, secondary, type }: TProps) => {
  return (
    <button
      type={type}
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

export default VIButton;
