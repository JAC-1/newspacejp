import { Metadata } from 'next';

export const dynamic = 'force-static'; // Not actually necessary, but it just resetates that this is a static page

export const metadata: Metadata = {
  title: 'About us',
  description: 'About myspace',
};

export default function Blog() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We bring the world together!</p>
    </div>
  );
}
