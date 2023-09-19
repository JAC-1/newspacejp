interface Params {
  handleClick: () => void;
}

export default function BackButton({ handleClick }: Params) {
  return (
    <button
      onClick={handleClick}
      className="text-md bottom-8 underline right-1 relative transition duration-500 hover:bg-neutral-200 hover:text-neutral-700 hover:no-underline font-bold h-backButtonH w-backButtonW rounded-sm "
    >
      Back
    </button>
  );
}
