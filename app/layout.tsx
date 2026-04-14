import type { Metadata } from "next";
import { Belleza, Gelasio, Luxurious_Script } from "next/font/google";
import "./globals.css";

const belleza = Belleza({
  variable: "--font-belleza",
  subsets: ["latin"],
  weight: "400",
});

const gelasio = Gelasio({
  variable: "--font-gelasio",
  subsets: ["latin"],
});

const luxuriousScript = Luxurious_Script({
  variable: "--font-luxurious-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Wedding of Inung & Akmal",
  description:
    "The wedding of Inung & Akmal, a celebration of love and unity. Join us as we embark on this beautiful journey together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${belleza.variable} ${gelasio.variable} ${luxuriousScript.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-hidden">
        {children}
      </body>
    </html>
  );
}
