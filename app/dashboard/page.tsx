// This is an example of a protected page. The link is in the Nav, but if you are not signed in, you will not see 'welcome home' and the signout button.
import { SignOutButton } from '../components/buttons';
import { getServerSession } from 'next-auth';

export default async function Dashboard() {
  const session = await getServerSession();
  if (!session) {
    return <h1>You must be signed in to access your dashboard.</h1>;
  } else {
    return (
      <>
        <h1>Welcome Home</h1>
        <SignOutButton />
      </>
    );
  }
}
