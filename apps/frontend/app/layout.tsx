import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
//import { ThemeProvider } from "@/components/ui/theme-provider";
// import { AuthInitializer } from "@/components/auth/AuthInitializer";
import React from "react";
//import { AuthInitializer } from "@/components/auth/AuthInitializer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "iChama - Digital Chama Management",
  description: "Simplify savings, contributions, loans, and record keeping for your group—securely, transparently and from anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} >
      
        
          {children}
       
      </body>
    </html>
  );
}