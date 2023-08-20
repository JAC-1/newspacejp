// This is an example of a protected page. The link is in the Nav, but if you are not signed in, you will not see 'welcome home' and the signout button.
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { SignOutButton } from '../components/buttons';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentEmail = session?.user?.email!;

  const user = await prisma.user.findUnique({ where: { email: currentEmail } });
}
