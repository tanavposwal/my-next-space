import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className + " bg-slate-200 p-3"}>
          <div className="bg-white container mx-auto min-h-[90vh]">
            <Navbar />
            <div className="p-8">{children}</div>
          </div>
          <footer className="p-2 text-slate-700 select-none">
            An emerging social media app.
          </footer>
        </body>
      </html>
    </AuthProvider>
  );
}
