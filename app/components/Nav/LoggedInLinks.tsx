import Link from "next/link";

interface Params {
  authenticated: boolean;
}


export default function LoggedInLinks({ authenticated }: Params) {
  if (authenticated) {
    return (
      <>
        <li className="p-2 md:text-xl md:p-0 text-neutral-400 transition duration-500 hover:text-white">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="p-2 md:text-xl md:p-0 text-neutral-400 transition duration-500 hover:text-white">
          <Link href={"/articles"}>Articles</Link>
        </li>
        <li className="p-2 md:text-xl md:p-0 text-neutral-400 transition duration-500 hover:text-white">
          <Link href={"/savedNews"}>Saved</Link>
        </li>
        <li className="p-2 md:text-xl md:p-0 text-neutral-400 transition duration-500 hover:text-white">
          <Link href={"/users"}>Users</Link>
        </li>
        <li className="p-2 md:text-xl md:p-0 text-neutral-400 transition duration-500 hover:text-white">
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      </>
    );
  } else {
    return (
      <div>
        <li className="p-2">
          <Link href={"/about"}>About</Link>
        </li>
      </div>
    );
  }
}
