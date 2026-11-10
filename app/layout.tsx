import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Libre_Baskerville({ subsets: ["latin"], weight: ["700"], variable: "--font-head-src" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-body-src" });

export const metadata: Metadata = {
  title: "Oto's Car Care & Repair | Transmission, Brake & Auto Repair in South Sacramento | (916) 665-1560",
  description:
    "South Sacramento auto repair on Freeport Blvd since 1990. Transmission service, brakes, oil changes and general repair for all makes and models. Rated 4.8 on Google. Call (916) 665-1560.",
  openGraph: {
    title: "Oto's Car Care & Repair | South Sacramento Auto Repair Since 1990",
    description: "Transmission service, brakes and honest auto repair on Freeport Blvd. Call (916) 665-1560.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${head.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
