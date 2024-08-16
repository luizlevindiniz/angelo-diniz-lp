import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "./providers";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prof Chines | Vote 55123",
  description: "Candidato Angelo Diniz - Professor Chines",
  applicationName: "Prof Chines | Vote 55123",
  authors: [{ name: "Luiz Diniz" }],
  generator: "Next.js",
  keywords: [
    "professor chines",
    "55123",
    "angelo diniz",
    "candidato",
    "vereador",
  ],
  creator: "Luiz Diniz",
  publisher: "Luiz Diniz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning className={inter.className}>
      <head />
      <body>
        <Providers>
          <div id="app__outlet">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
