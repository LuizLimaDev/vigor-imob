import type { Metadata } from "next";
import { Alegreya, Archivo, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer/Footer";
import MenuMobile from "./_components/MenuMobile/MenuMobile";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
const alefreya = Alegreya({ subsets: ["latin"], variable: "--font-alefreya" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "800"],
  display: "swap",
  style: "normal",
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
        suppressHydrationWarning
      >
        <MenuMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
