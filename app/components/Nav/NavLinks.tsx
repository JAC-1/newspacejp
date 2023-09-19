import Link from "next/link";
import { SignInButton } from "../buttons";


export default function NavLinks() {
  return (
    <ul className="hidden md:flex items-center justify-between flex-row gap-5 pr-6 text-neutral-300 ">
      <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white ">
        <Link href={"/about"}>About</Link>
      </li>
      <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white ">
        <Link href={"/articles"}>Articles</Link>
      </li>
      <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white ">
        <Link href={"/users"}>Users</Link>
      </li>
      <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white ">
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>
      <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white ">
        <SignInButton />
      </li>
    </ul>
  );
}
