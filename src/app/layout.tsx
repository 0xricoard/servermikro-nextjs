import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
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
