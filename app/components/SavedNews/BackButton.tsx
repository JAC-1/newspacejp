import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/savedNews">
      <button className="text-md bg-customGrey transition duration-500 hover:bg-green-300 hover:text-neutral-700 font-bold md:h-bigBH md:w-bigBW w-smBW h-smBH rounded-md">
        Back
      </button>
    </Link>
  );
}
