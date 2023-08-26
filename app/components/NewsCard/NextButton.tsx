interface Params {
  arrow: string;
  handleClick: () => void;
}

export default function BigButton({arrow, handleClick }: Params) {

  // TODO: Tailwind can't use literals with hover?
  return (
    <button
      onClick={handleClick}
      className="text-md bg-customGrey transition duration-500 hover:bg-green-300 hover:text-neutral-700 font-bold h-bigBH w-bigBW rounded-md"
    >
     Next 
      <span className="pl-2">{arrow}</span>
    </button>
  );
}
