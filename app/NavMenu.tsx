import Link from 'next/link';
import Image from 'next/image';
import styles from './NavMenu.module.css';
import { SignInButton, SignOutButton } from './components/buttons';

export default function () {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image src='/vercel.svg' width={216} height={30} alt='Myspace Logo' />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
        <li>
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
