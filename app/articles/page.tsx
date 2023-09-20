import NewsCard from "@/app/components/NewsCard/NewsCard";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import dateConstructor from "../utils/dateConstructor";

export default async function Article() {
  
  const dateToday = dateConstructor()


  const articles = await prisma.article.findMany({
    where: { publishedAt: { contains: dateToday } },
    take: 10,
  });

  revalidatePath("/articles");

  return <NewsCard props={articles} />;
}
