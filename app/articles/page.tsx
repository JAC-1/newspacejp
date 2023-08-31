import NewsCard from "@/app/components/NewsCard/NewsCard";
import { prisma } from "@/lib/prisma";

export default async function Article() {
  const article  = await prisma.article.findFirst({where: {id: "cllymbhps0000tubokc1oro48"}})

  console.log(article)
  // const { articles } = await fetch("http://localhost:3000/api/news").then(
  //   (res) => res.json(),
  // );


  return <NewsCard props={article} />;
}
