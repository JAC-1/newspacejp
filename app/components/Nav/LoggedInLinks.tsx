import Link from "next/link";

interface Params {
  handleClick: () => void;
}

export default function LoggedInLinks({ handleClick }: Params) {
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
}
