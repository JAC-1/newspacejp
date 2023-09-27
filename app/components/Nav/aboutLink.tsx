
// <li className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white ">
//   <Link href={"/about"}>About</Link>
// </li>
import Link from "next/link";

export default function AboutLink({mobile}: boolean) {
  return (
  <li>
    {mobile ? (
      <Link className="text-xl p-0 text-neutral-400 transition duration-500 hover:text-white" href={"/about"}>About</Link>
    ): (
      <Link href={"/about"}>About</Link>
    )} 
    </li>
  );
}
