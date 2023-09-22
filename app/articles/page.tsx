import NewsCard from "@/app/components/NewsCard/NewsCard";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import dateConstructor from "../utils/dateConstructor";

export default async function Article() {
  
  const last5DatesArray: string[] = dateConstructor()
  const today = last5DatesArray[0];
  const yesterday = last5DatesArray[1];
  const twodaysago = last5DatesArray[2];


  const articles = await prisma.article.findMany({
    where: { publishedAt: { contains: today || yesterday || twodaysago } },
    take: 10,
  });

  revalidatePath("/articles");

  return <NewsCard props={articles} />;
}
