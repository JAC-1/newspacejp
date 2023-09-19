import Link from 'next/link';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
  bio: string | null;
}

export default function UserCard({ id, name, age, bio, image }: Props) {
  return (
  <div>
      <div className="group h-full w-full rounded-xl transition duration-500 hover:bg-green-50 p-1">
        
    <div className="flex align-center justify-center max-w-sm p-6 bg-neutral-800 border border-gray 200 rounded-lg shadow transition duration-500 hover:bg-neutral-700 dark:bg-neutral-800 dark:border-gray-700">
      <img
        src={image ?? '/mememan.webp.png'}
        alt={`${name}'s profile.`}
        className="w-2/3"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">
            <Link href={`/users/${id}`}>{name}</Link>
        </div>
        <p className=''>Bio: {bio}</p>
      </div>
    </div>
      </div>
    </div>
  );
}
