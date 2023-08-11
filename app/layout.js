import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bizim Terzi",
  description: "Bizim Terzi, kalitenin bir numaralı adresi",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="
      
      "
    >
      <head></head>
      <body
        className={`${inter.className} min-h-screen flex flex-col duration-1000
ease-in-out transition-all flex-1 
bg-gradient-to-r from-gray-700 via-gray-900 to-black
 `}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
