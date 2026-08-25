import type { Metadata } from "next";
import { Geist, Barlow_Condensed } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/layout/MotionProvider";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redmangata.com"),
  title: {
    default: "Red Mångata — Game Art & Visual Development",
    template: "%s — Red Mångata",
  },
  description:
    "Red Mångata is a game-art and visual-development team specializing in character design, environment design, concept art and visual development for game studios.",
  openGraph: {
    title: "Red Mångata — Game Art & Visual Development",
    description:
      "Red Mångata is a game-art and visual-development team specializing in character design, environment design, concept art and visual development for game studios.",
    siteName: "Red Mångata",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
