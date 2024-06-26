import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { AppbarClient } from "../components/AppbarClient";
import { Footer } from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merchant Wallet",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>
   <AppbarClient/>
        {children}
        
        </body>
      </Providers>
    </html>
  );
}
