interface Params {
  title: string;
  arrow: string;
  handleClick: () => void;
}

export default function BigButton({ title, arrow, handleClick }: Params) {

  const colorTrans = title == "Next" ? "bg-green-300" : "bg-blue-300"

  
  // TODO: Tailwind can't use literals with hover?
  return (
    <button
      onClick={handleClick}
      className={`text-md bg-customGrey transition duration-500 hover:${colorTrans} hover:text-neutral-700 font-bold h-bigBH w-bigBW rounded-md`}
    >
      {title}<span className="pl-2">{arrow}</span>
    </button>
  );
}
