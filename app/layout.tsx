import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GOCINGO",
  description: "Gocingo is a non-profit organization dedicated to making a positive impact on the world through sustainable development and community empowerment.",
  keywords: ["NGO", "impact", "donations", "charity", "sustainable development", "community empowerment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
        {children}
        </main>
        <Toaster />
        <Footer />
        </div>
      </body>
    </html>
  );
}
