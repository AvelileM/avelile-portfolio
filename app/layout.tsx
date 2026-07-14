import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avelile Mnyazana — Software Engineering Student",
  description:
    "Portfolio of Avelile Mnyazana, a final-year software engineering student at WeThinkCode_, focused on backend, frontend, and full-stack development, problem solving, and collaborative learning.",
  keywords: [
    "Avelile Mnyazana",
    "Software Developer Portfolio",
    "WeThinkCode_",
    "Junior Software Engineer",
    "Graduate Programme",
    "Software Engineering Student South Africa",
  ],
  authors: [{ name: "Avelile Mnyazana" }],
  openGraph: {
    title: "Avelile Mnyazana — Software Engineering Student",
    description:
      "Final-year software engineering student at WeThinkCode_. Building practical applications, solving problems, and growing through collaborative learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
