import type { Metadata } from "next";
import { Alan_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/messages/en.json";
import "./globals.css";

const alanSans = Alan_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  variable: "--font-alan-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ritepath Landing",
  description: "Ritepath landing page built with Next.js App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alanSans.variable} h-full antialiased`}>
      <body className={`${alanSans.className} min-h-full flex flex-col`}>
        <NextIntlClientProvider locale="en" messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
