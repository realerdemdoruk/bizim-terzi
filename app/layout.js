import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import PhoneButton from "./components/PhoneButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bizim Terzi",
  description: "Bizim Terzi, kalitenin bir numaralı adresi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${inter.className} min-h-screen flex flex-col flex-1 
        bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900`}
      >
        <Navbar />
        {children}
        <PhoneButton />
      </body>
    </html>
  );
}
