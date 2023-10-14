// TODO : Make this a learning info page with the usage and motivation behind this site

import { Metadata } from "next";

export const dynamic = "force-static"; // Not actually necessary, but it just resetates that this is a static page

export const metadata: Metadata = {
  title: "About us",
  description: "About myspace",
};

export default function Blog() {
  return (
    <main className="my-10">
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-6">About My App</h2>
        <p className="leading-7">
          My App is a Japanese reading comprehension app that helps you improve
          your skills by providing a focused atmosphere (flashcard style) to
          read daily headings. You can also follow other users and see their
          public stats. An AI language helper/teacher is coming soon.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-6">Why use My App?</h2>
        <ul className="list-disc leading-7">
          <li>Improve your Japanese reading comprehension skills</li>
          <li>Learn new vocabulary and grammar</li>
          <li>Stay motivated with a focused atmosphere</li>
          <li>Connect with other Japanese learners</li>
          <li>Get help from an AI language helper/teacher (coming soon)</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-6">How it works</h2>
        <ol className="list-decimal leading-7">
          <li>Sign up for a free account</li>
          <li>Choose a heading to read</li>
          <li>Read the heading and tap the screen to see the next one</li>
          <li>Repeat steps 2 and 3 until you're finished</li>
          <li>Follow other users and see their public stats</li>
          <li>Use the AI language helper/teacher to get help (coming soon)</li>
        </ol>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-6">Get started today</h2>
        <p className="leading-7">
          My App is available for free on the App Store and Google Play. Sign up
          today and start improving your Japanese reading comprehension skills!
        </p>
      </section>
    </main>
  );
}
