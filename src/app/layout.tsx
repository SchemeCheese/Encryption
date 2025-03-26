import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
