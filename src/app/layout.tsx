import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/ui/JsonLd";
import { SITE_CONFIG } from "@/data/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Digital Growth Studio`,
    template: `%s | ${SITE_CONFIG.name} Digital Growth Studio`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "social media management",
    "content strategy services",
    "content creation studio",
    "community management agency",
    "personal branding for founders",
    "paid social campaigns",
    "digital growth studio",
    "Instagram audience growth",
    "LinkedIn management",
  ],
  authors: [{ name: SITE_CONFIG.fullName }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-white">
        <OrganizationJsonLd />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
