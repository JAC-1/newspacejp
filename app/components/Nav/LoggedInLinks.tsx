import Link from "next/link";

interface Params {
  handleClick: () => void;
  mobile: boolean;
}

export default function LoggedInLinks({ mobile, handleClick }: Params) {
  if (mobile) {
    return (
      <div>
        <li className="p-2">
          <Link href={"/articles"} onClick={handleClick}>Articles</Link>
        </li>
        <li className="p-2">
          <Link href={"/users"} onClick={handleClick}>Users</Link>
        </li>
        <li className="p-2">
          <Link href={"/dashboard"} onClick={handleClick}>Dashboard</Link>
        </li>
      </div>
    );
  } else if (!mobile) {
    return (
      <>
        <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white">
          <Link href={"/articles"} onClick={handleClick}>Articles</Link>
        </li>
        <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white">
          <Link href={"/users"} onClick={handleClick}>Users</Link>
        </li>
        <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white">
          <Link href={"/dashboard"} onClick={handleClick}>Dashboard</Link>
        </li>
      </>
    );
  }
}
