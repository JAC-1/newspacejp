import Link from "next/link";

interface Params {
  title: string;
  image: string;
  date: string | null;
  key: string
}

export default function SavedNewsCard({key, title, image, date}: Params ) {
  // for each prop, create a card
  // TODO: add a button to remove the article from the saved news page
  // TODO: add the ability to click the card to open the article into a new page
  // return a card with the title, image, and date that has the image 1/3 the size of the card at the top
  return ( 
    <Link href={`/article/${key}`}>
    <div key={key} className="w-cardWidth h-cardHeight rounded-md bg-cardBackground">
      <img src={image} alt="article image" className="w-full h-1/3 rounded-t-md" />
      <div className="w-fit">{title}</div>
      <div>{date}</div>
    </div>
    </Link>
  )
}
