import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Mykola Moskalenko- Full Stack Developer",
  description:
    "Full Stack Developer with 5+ years of experience in JavaScript, TypeScript, React, Next.js, and Node.js. Based in Covilhã, Portugal.",
  keywords: [
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Covilhã",
    "Portugal",
  ],
  authors: [{ name: "Mykola Moskalenko" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0d1117] text-[#e6edf3]`}
      >
        {children}
      </body>
    </html>
  );
}
