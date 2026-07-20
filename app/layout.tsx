import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Mata Convent High School | Chhatarpur",
  description: "Official website of Maria Mata Convent High School, Chhatarpur (M.P.). Providing inspirational education and holistic development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background`}>
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
