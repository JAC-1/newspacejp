import NewsCard from "@/app/components/NewsCard/NewsCard";
import SaveButton from "./SaveButton";
import { prisma } from "@/lib/prisma";

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

  // awaiting a time out > call api > add data to db > access db > send articles to components

  const { articles } = await fetch("http://localhost:3000/api/news").then(
    (res) => res.json(),
  );

  const saveArticle = () => {
    console.log("Called from a server component");
  };

  return <NewsCard props={articles} />;
}
