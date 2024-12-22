import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import NavBarDumb from "@/ui/components/dumbs/navbar";
import FooterDumb from "@/ui/components/dumbs/footer";
import NavBarDumbMobile from "@/ui/components/dumbs/mobile/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joselin Rodriguez",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <NextUIProvider>
          <div className="flex flex-col min-h-screen">
            <div className="hidden sm:block">
              <NavBarDumb />
            </div>
            <div className="block sm:hidden">
              <NavBarDumbMobile/>
            </div>
            <div className="flex-grow flex flex-col gap-8 p-8 pb-20 sm:p-20">
              {children}
            </div>
            <FooterDumb />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}

