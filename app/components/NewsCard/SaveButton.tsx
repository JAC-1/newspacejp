interface Params {
  arrow: string;
  handleClick: () => void;
}

export default function BigButton({ arrow, handleClick }: Params) {
  // TODO: Tailwind can't use literals with hover?
  return (
    <button
      onClick={() => handleClick()}
      className="text-md bg-customGrey transition duration-500 hover:bg-blue-300 hover:text-neutral-700 font-bold md:h-bigBH md:w-bigBW w-smBW h-smBH rounded-md"
    >
      Save<span className="pl-2">{arrow}</span>
    </button>
  );
}
