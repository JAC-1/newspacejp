import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import styles from './page.module.css';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserPage({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};
  return (
    <div>
      <h1 className="font-be text-7xl text-titleSize px-16 py-10">{name}</h1>
      <img
        width={300}
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile picture`}
      />
      <h3>Bio</h3>
      <p>{bio}</p>
    </div>
  );
}
