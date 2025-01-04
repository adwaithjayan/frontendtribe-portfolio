import type { Metadata } from "next";
import "./globals.css";
import {Archivo} from "next/font/google";

const archivo = Archivo({
  display:'swap',
  weight:'variable',
  subsets:['latin'],
  variable:'--font-archivo',
})
export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
  description: "Created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased text-stone-900 bg-stone-200 ${archivo.variable} font-sans`}>{children}</body>
    </html>
  );
}
