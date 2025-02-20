import type { Metadata } from "next";
import { Manrope, Crimson_Text, Merriweather } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-crimson",
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Generation Lab",
  description: "Generation Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${manrope.variable} ${crimsonText.variable} ${merriweather.variable} min-h-full bg-gray-50 antialiased`}
      >
        <div className="flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
