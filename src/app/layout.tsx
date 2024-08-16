import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Prof Chines | Vote 55123",
  description: "Vereador professor chines Angelo Diniz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <div id="app__outlet">{children}</div>
      </body>
    </html>
  );
}
