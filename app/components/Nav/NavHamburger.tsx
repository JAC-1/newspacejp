import { SignInButton } from "../buttons";
import Link from "next/link";

interface Params {
  showMenu: boolean;
  handleClick: () => void;
}

export default function NavHamburger({ showMenu, handleClick }: Params) {
  return (
    <div>
      {showMenu
        ? (
          <div className="md:hidden top-16 text-white text-2xl pl-10 fixed right-0 flex flex-col bg-black w-56 h-2/4 transition-all duration-500 ease-in-out">
            <ul className="relative top-12">
              <li className="p-2">
                <Link href={"/about"} onClick={handleClick}>About</Link>
              </li>
              <li className="p-2">
                <Link href={"/articles"} onClick={handleClick}>Articles</Link>
              </li>
              <li className="p-2">
                <Link href={"/users"} onClick={handleClick}>Users</Link>
              </li>
              <li className="p-2">
                <Link href={"/dashboard"} onClick={handleClick}>Dashboard</Link>
              </li>
              <li className="p-2">
                <SignInButton />
              </li>
            </ul>
          </div>
        )
        : <div></div>}
    </div>
  );
}