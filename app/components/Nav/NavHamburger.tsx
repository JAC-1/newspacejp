import { SignInButton } from "../buttons";
import Link from "next/link";

export default function NavHamburger() {
  return (
    <div className="md:hidden top-16 text-white text-2xl pl-10 fixed right-0 flex flex-col bg-black w-72 h-2/5">
      <ul className="relative top-12">
        <li className="">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="">
          <Link href={"/articles"} >Articles</Link>
        </li>
        <li className="">
          <Link href={"/users"}>Users</Link>
        </li>
        <li className="">
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li className="">
          <SignInButton />
        </li>
      </ul>
      </div>
  );
}
