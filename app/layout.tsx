import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";

import ThemeProvider from "@/providers/ThemeProvider";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],

  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "شهید بهشتی",

  description: "مرکز معرفی اندیشه‌ها، آثار و زندگی شهید آیت‌الله دکتر بهشتی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`
        ${vazirmatn.variable}
        antialiased
        pt-24
        `}
      >
        <ThemeProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
