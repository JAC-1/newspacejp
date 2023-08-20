import Link from 'next/link';
import Image from 'next/image';
// import styles from './NavMenu.module.css';
import { SignInButton, SignOutButton } from './components/buttons';

export default function () {
  return (
    <nav className='flex w-full flex-wrap items-center justify-between py-2 hover:text-neutral-700 focus: text-neutral-700 dark:bg-neutral-600 lg:py-4'>
      <Link href={'/'}>
        <Image src='/vercel.svg' width={216} height={30} alt='Myspace Logo' />
      </Link>
      <ul className='flex items-center justify-between flex-row gap-5 pr-6 text-neutral-300 '>
        <li className='p-0 text-neutral-400 transition duration-500 hover:text-white '>
          <Link href={'/about'}>About</Link>
        </li>
        <li className='p-0 text-neutral-400 transition duration-500 hover:text-white '>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li className='p-0 text-neutral-400 transition duration-500 hover:text-white '>
          <Link href={'/users'}>Users</Link>
        </li>
        <li className='p-0 text-neutral-400 transition duration-500 hover:text-white '>
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>
        <li className='p-0 text-neutral-400 transition duration-500 hover:text-white '>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
