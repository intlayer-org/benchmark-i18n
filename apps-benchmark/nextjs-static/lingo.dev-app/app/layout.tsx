import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "i18n Benchmark",
  description:
    "An open-source benchmark for measuring the real-world impact of internationalization libraries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
