import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio | Professional Creative",
  description: "Personal portfolio showcasing my work, skills, and experience.",
  openGraph: {
    title: "Portfolio | Professional Creative",
    description: "Personal portfolio showcasing my work, skills, and experience.",
    url: "https://myportfolio.com",
    siteName: "Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-[#0a0a0f] text-neutral-50 antialiased selection:bg-teal-500/30 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
