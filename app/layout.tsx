import type { Metadata } from "next";

import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "365 Burger",
  description:
    "Experience handcrafted burgers at 365 BURGER, where every bite bursts with flavor. Discover your new favorite burger haven!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
