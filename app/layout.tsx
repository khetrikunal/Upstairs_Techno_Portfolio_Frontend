import type { Metadata } from "next";
import { Nunito, DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import AscentGauge from "@/components/AscentGauge";
import CustomCursor from "@/components/CustomCursor";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Upstairs Techno — Enterprise Engineering, One Level Up",
  description:
    "Upstairs Techno designs and builds enterprise platforms for companies that can't afford to get it wrong: financial services, logistics, and healthcare systems at scale.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Upstairs Techno — Enterprise Engineering",
    description: "Enterprise software engineering for financial services, logistics, and healthcare companies.",
    siteName: "Upstairs Techno",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${nunito.variable} ${dmSans.variable} ${inter.variable} min-h-full flex flex-col bg-paper text-ink font-body overflow-x-hidden`}>
        <AscentGauge />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
