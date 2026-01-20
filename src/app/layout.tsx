import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Server Mikro - Affordable Server & Hosting Solutions",
  description: "High Performance & Affordable Server/Hosting Solutions. Web Hosting, VPS Linux, RDP Windows, VPS/RDP NAT, Premium Proxies with global network coverage.",
  keywords: ["hosting", "vps", "server", "web hosting", "rdp", "proxy", "indonesia", "cheap hosting"],
  authors: [{ name: "Server Mikro" }],
  creator: "Server Mikro",
  openGraph: {
    title: "Server Mikro - Affordable Server & Hosting Solutions",
    description: "High Performance & Affordable Server/Hosting Solutions",
    url: "https://servermikro.com",
    siteName: "Server Mikro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Server Mikro - Affordable Server & Hosting Solutions",
    description: "High Performance & Affordable Server/Hosting Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}> 
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9917389238286564"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        <ThemeProvider
          defaultTheme="system"
          storageKey="servermikro-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}