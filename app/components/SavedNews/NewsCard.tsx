"use client";

import Link from "next/link";

interface Params {
  title: string;
  image: string;
  date: string | null;
  id: string;
}

export default function SavedNewsCard({ id, title, image, date }: Params) {
  // for each prop, create a card
  // TODO: add a button to remove the article from the saved news page
  // TODO: add the ability to click the card to open the article into a new page
  return (
    <Link href={`/savedNews/${id}`}>
      <div
        key={id}
        className="w-cardWidth h-cardHeight rounded-md bg-cardBackground"
      >
        <img
          src={image}
          alt="article image"
          className="w-full h-1/3 rounded-t-md"
        />
        <div className="w-fit h-3/5 p-8 text-3xl overflow-clip">{title}</div>
        <div className="text-center">{date}</div>
      </div>
    </Link>
  );
}
