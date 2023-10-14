import NewsCard from "@/app/components/NewsCard/NewsCard";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import dateConstructor from "../utils/dateConstructor";

export default async function Article() {

  const yesterday = dateConstructor().yesterday

  const articles = await prisma.article.findMany({
    where: { publishedAt: { contains: yesterday } },
    take: 10,
  });


  // TODO: Position next and save buttons next to the news card
  return <NewsCard props={articles} />;
}
