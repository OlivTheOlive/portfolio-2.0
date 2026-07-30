import type { Metadata } from "next";
import { JetBrains_Mono, Fraunces, VT323 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Olivie Bergeron | Portfolio",
  description: "Personal portfolio showcasing my work and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${fraunces.variable} ${vt323.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="crt-flicker" aria-hidden />
          <div className="crt-vignette" aria-hidden />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
