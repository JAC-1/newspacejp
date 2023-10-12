import NewsCard from "@/app/components/NewsCard/NewsCard";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Article } from "@prisma/client";
import dateConstructor from "../utils/dateConstructor";


export default async function Article() {

  const dates = dateConstructor()


  const articles = await prisma.article.findMany({
    where: { publishedAt: { contains: dates.yesterday}}
})
  // const articles = new Array()

  // create a store of articles from prisma for current day
  // if the store is not 10, then query prisma for the previous day and add to store
  // if the store is not 10, then query prisma for two days previous and add to store



  revalidatePath("/article");
  // console.log(articles.length)
  console.log(dates.yesterday)

  // TODO: Position next and save buttons next to the news card
  return <NewsCard props={articles} />;
}
