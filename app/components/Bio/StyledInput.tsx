interface Props {
  defaultValue: string;
  name: string;
}

export default function StyledInput({ defaultValue, name }: Props) {
  return (
    <input
      className="appearance-none bg-neutral-900 border border-zinc-700 rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline focus:border-neutral-500 focus:border-2"
      type="text"
      name={name}
      defaultValue={defaultValue}
    />
  );
}
