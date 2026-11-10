import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AusPop — Australia’s post-COVID population story",
  description:
    "Explore where Australia’s population growth landed after COVID — national trends, state shares, and fast-growing LGAs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${manrope.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
