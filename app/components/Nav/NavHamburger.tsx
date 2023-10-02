import SignInButton from "./LoginButton";
import Link from "next/link";
import LoggedInLinks from "./LoggedInLinks";
import { useSession } from "next-auth/react";

interface Params {
  showMenu: boolean;
  handleClick: () => void;
}

export default function NavHamburger({ showMenu, handleClick }: Params) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return <SignInButton />;
    },
  });

  const isAuthenticated: boolean = status === "authenticated" ? true : false;
  return (
    <div>
      {showMenu ? (
        <div className="z-20 md:hidden top-14 text-white text-2xl pl-10 fixed right-0 flex flex-col bg-black w-56 h-2/4 transition-all duration-500 ease-in-out">
          <ul className="relative top-7">
            <LoggedInLinks authenticated={isAuthenticated} />
            <li className="p-2">
              <SignInButton />
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
