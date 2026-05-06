import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://questk2.com"),
  title: {
    default: "QuestK2 Technologies | Microsoft Solutions Partner",
    template: "%s | QuestK2 Technologies",
  },
  description:
    "QuestK2 is a trusted Microsoft Solutions Partner helping organizations modernize platforms, activate AI, and execute at scale with Azure expertise and global delivery.",
  keywords: [
    "Microsoft Solutions Partner",
    "Azure migration",
    "Cloud AI Security",
    "Data Engineering",
    "Digital Transformation",
    "QuestK2",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "QuestK2 Technologies",
    title: "QuestK2 Technologies | Microsoft Solutions Partner",
    description:
      "QuestK2 is a trusted Microsoft Solutions Partner helping organizations modernize platforms, activate AI, and execute at scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuestK2 Technologies | Microsoft Solutions Partner",
    description:
      "QuestK2 is a trusted Microsoft Solutions Partner helping organizations modernize platforms, activate AI, and execute at scale.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
