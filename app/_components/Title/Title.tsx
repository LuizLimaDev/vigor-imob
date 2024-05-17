export type TProps = {
  children: React.ReactNode;
};

export default function Title({ children }: TProps) {
  return (
    <h1 className="font-archivo text-base font-bold uppercase text-VIprimary-color">
      {children}
    </h1>
  );
}
