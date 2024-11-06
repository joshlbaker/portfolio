import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josh Baker | Software Developer",
  description: "Experienced in building Web and Mobile JavaScript applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
