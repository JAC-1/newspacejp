import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Space JP",
  description:
    "A place to study Japanese using real news headings and articles",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <AuthProvider>
      <html lang="en" className="h-screen scroll-ms-6 ">
        <body className="bg-neutral-800 h-full">
          <NavMenu />
          <div id="container" className="text-neutral-200 flex align-middle justify-center w-full h-full">
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
