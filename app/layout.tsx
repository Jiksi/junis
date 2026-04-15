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
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
