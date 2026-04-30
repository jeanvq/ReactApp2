import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Rivera | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {/* Navbar */}
        <nav className="border-b border-gray-800 px-10 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-400">
            Alex Rivera
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
            <Link href="/about" className="hover:text-blue-400 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
