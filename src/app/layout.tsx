import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anubhav Bose Portfolio",
  description: "Showcasing my skills, experience, and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-accent min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
