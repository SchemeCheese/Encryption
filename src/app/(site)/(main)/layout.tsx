'use client';

import { Poppins } from "next/font/google";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <SessionProvider>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
