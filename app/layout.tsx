import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue, Inter, Roboto_Mono } from "next/font/google";
import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
const bebas = Bebas_Neue({
  weight: "400",
  variable: "--bebas-neue",
  preload: false,
});

export const metadata: Metadata = {
  title: "News Space JP",
  description:
    "A place to study Japanese using real news headings and articles",
};

type Props = {
  children: React.ReactNode;
};

// TODO: on mobile the body content should have enough padding to display the heading properly (see Provile for example problem)

export default function RootLayout({ children }: Props) {
  return (
    <AuthProvider>
      <html
        lang="en"
        className={`${bebas.variable} ${inter.variable} ${roboto_mono.variable} h-full md:h-desktopH scroll-ms-6`}
      >
        <body className="bg-neutral-800 h-full flex flex-col">
          <NavMenu />
          <div
            id="container"
            className="text-neutral-200 flex align-middle justify-center w-full h-full md:mt-20 "
          >
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
