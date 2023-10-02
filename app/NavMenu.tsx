import Link from "next/link";
import Image from "next/image";
import NavLinks from "./components/Nav/NavLinks";
import BugerButton from "./components/Nav/BugerButton";

// TODO : When you click your profile image it takes you to your profile page.

export default function () {
  return (
    <nav className="z-20 flex w-full h-2 flex-wrap items-center justify-between py-2 hover:text-neutral-700 focus:text-neutral-700 dark:bg-transparent fixed border-b-2 border-neutral-600 lg:py-4">
      {/* adds a blur to the background */}
      <div className="z-10 absolute inset-0 bg-neutral-900 bg-opacity-50 backdrop-filter backdrop-blur-lg h-navBarHeight"></div>
      <Link href={"/"} className="pl-5 relative z-30">
        <Image
          className=""
          src="/Logo.png"
          width={75}
          height={30}
          alt="NewsSpaceLogo"
        />
      </Link>
      <BugerButton />
      <NavLinks />
    </nav>
  );
}
