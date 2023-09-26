import Link from "next/link";
import Image from "next/image";
import NavLinks from "./components/Nav/NavLinks";
import BugerButton from "./components/Nav/BugerButton";

// TODO : When you click your profile image it takes you to your profile page.

export default function () {
  return (
    <nav className="flex w-full h-16 flex-wrap items-center justify-between py-2 hover:text-neutral-700 focus:text-neutral-700 dark:bg-customGrey border-b-2 border-neutral-600 lg:py-4">
      <Link href={"/"} className="pl-5">
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
