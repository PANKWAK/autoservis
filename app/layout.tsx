import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autoservis Kolář Ústí nad Labem",
  description:
    "Autoservis Kolář v Ústí nad Labem: opravy motorových vozidel, diagnostika, sváření a běžný autoservis.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Autoservis Kolář Ústí nad Labem",
    description:
      "Komplexní opravy motorových vozidel, diagnostika a autoservis v Ústí nad Labem.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
