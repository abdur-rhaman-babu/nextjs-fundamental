import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Learning Next Js",
    template: "Learning Next Js | %s"
  },
  description: "Trying to learn Next Js",
  keywords: ['Next.js', 'React', 'JavaScript']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-[74.7vh]">{children}</main>
        <footer>
          <h1 className="bg-gray-400 py-12 text-center">This is a Footer</h1>
        </footer>
      </body>
    </html>
  );
}
