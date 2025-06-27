import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AI } from "./action";
import clsx from "clsx";
import { SpaceBackground } from "@/components/space-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Chat",
  description: "Developed by Aritra",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AI>
      <html lang="en">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          "antialiased"
        )}
      >
        <SpaceBackground />
        {children}
      </body>
    </html>
    </AI>
  );
}
