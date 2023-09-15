import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono, Bebas_Neue } from "next/font/google";
import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";
import NavHamburger from "./components/Nav/NavHamburger";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto_mono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });
const bebas = Bebas_Neue({weight: "400", variable: "--bebas-neue"});

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
      <html lang="en" className={`${bebas.variable} ${inter.variable} ${roboto_mono.variable} h-screen scroll-ms-6`}>
        <body className="bg-neutral-800 h-full">
          <NavMenu />
          <NavHamburger/>
          <div id="container" className="text-neutral-200 flex align-middle justify-center w-full h-full">
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
