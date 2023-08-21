import NewsCard from "@/app/components/NewsCard";
import { json } from "stream/consumers";

interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export default async function Article() {
  // const key = process.env.NEWSAPIKEY; //
  // const data = await fetch(
  //   `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${key}`
  // );
  // const newsArticles = data.articles;

  const { articles } = await fetch("http://localhost:3000/api/news").then(
    (res) => res.json()
  );

  return <NewsCard props={articles} />;
}
