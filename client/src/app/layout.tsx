import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { ReactQueryProvider } from "@/providers/tanstack/react-query-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modals/modal-providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"], 
  subsets: ["latin"],      
});

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
  title: "Legalysis",
  description: "AI-Powered Contract Analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${poppins.className} antialiased`}
      >
        <ReactQueryProvider>
          <Header />
          <ModalProvider>{children}</ModalProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
