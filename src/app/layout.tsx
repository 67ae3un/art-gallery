import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Art Gallery | Portfolio",
  description: "A showcase of exceptional 2D and 3D digital art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} dark`}>
      <body className="antialiased min-h-screen bg-[#0a0a0c] text-[#f4f4f5]">
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              ART<span className="text-blue-500">GALLERY</span>
            </Link>
            <nav className="flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/artworks" className="hover:text-blue-400 transition-colors">Artworks</Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
            </nav>
          </div>
        </header>
        <main className="pt-16 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <footer className="py-12 border-t border-white/5 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Art Gallery. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
