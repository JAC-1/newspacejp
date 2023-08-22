import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { ProfileForm } from './ProfileForm';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentEmail = session?.user?.email!;

  const user = await prisma.user.findUnique({
    where: { email: currentEmail },
  });
  return (
    <>
      <h1 className=''>Dashboard</h1>
      <ProfileForm user={user} />
    </>
  );
}
