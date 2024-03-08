import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import logo from "../public/logo.png";
export const metadata: Metadata = {
  title: "Daumenfrosch",
  description: "Daumenfrosch",
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#5883f4" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
