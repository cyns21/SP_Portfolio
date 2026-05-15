import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephanie Ponce | Portfolio",
  description:
    "A gothic-cute creative portfolio concept for makeup, DIY projects, baking, and journal notes."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
