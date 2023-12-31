"use client";

import SignInButton from "./LoginButton";
import LoggedInLinks from "./LoggedInLinks";
import { useSession } from "next-auth/react";

export default function NavLinks() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return;
    },
  });

  const authenticated: boolean = status == "authenticated" ? true : false;

  return (
    <ul className="z-20 hidden md:flex items-center justify-between flex-row gap-5 pr-6 text-neutral-300 ">
      <LoggedInLinks authenticated={authenticated} />
      <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white ">
        <SignInButton />
      </li>
    </ul>
  );
}
