import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FF-FACI-6840 - Facility Management System",
  description: "Comprehensive facility management system for Furfield operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full m-0 p-0`}
        style={{ background: 'transparent' }}
        suppressHydrationWarning={true}
      >
        <div className="h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
