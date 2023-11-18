import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { ThemeProvider } from "@/MT";
import Script from "next/script";

import "./globals.css";
import Header from "@/components/shared/Header";
import { AppProvider } from "@/context/AppContext";

import Footer from "@/components/shared/Footer";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Based Solar",
  description:
    "Based Solar: Your Gateway to Clean, Cost-Efficient Energy Solutions.",
  keywords: [
    "based solar",
    "based solar panels",
    "based",
    "solar",
    "solar panels",
    "power plants",
  ],
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang ?? "en"}>
      <ThemeProvider>
        <AppProvider>
          <body>
            <Script src="//cdn.cookie-script.com/s/fc85caa6135ee89d33a8a1101e4a9a17.js" />
            <Header />
            <main className={`${nunito_sans.className} scroll-smooth`}>
              {children}
            </main>
            <Footer />
          </body>
        </AppProvider>
      </ThemeProvider>
    </html>
  );
}
