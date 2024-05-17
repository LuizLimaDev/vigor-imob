import type { Metadata } from "next";
import { Alegreya, Archivo, Poppins } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const alefreya = Alegreya({ subsets: ["latin"], variable: "--font-alefreya" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Vigor Imobiliária",
  description: "Um novo conceito de moradia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${archivo.variable} ${alefreya.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
