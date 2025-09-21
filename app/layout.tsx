import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TejoVik — Software, Websites & Apps",
  description: "TejoVik builds custom software, web, and mobile applications with ongoing support.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "TejoVik",
    description: "Custom software, websites & apps — built fast, right, and supported.",
    url: "https://tejovik.example",
    siteName: "TejoVik",
    images: [{ url: "/logo.svg", width: 1200, height: 630, alt: "TejoVik" }],
    type: "website"
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navbar always visible */}
          <Navbar />

          {/* Main content with top padding to avoid overlapping fixed Navbar */}
          <main>{children}</main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
