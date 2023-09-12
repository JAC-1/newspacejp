
interface Props {
  name: string
}

export default function StyledLabel({name}: Props) {
  return (
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" htmlFor={name}>
      {name}
    </label>
    </div>
  );
}
