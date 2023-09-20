import { prisma } from "@/lib/prisma";
import { JsonQuery } from "@prisma/client/runtime/library";

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: ArticleData[];
}

interface ArticleData {
  source: { id?: string; name?: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

async function queryNewsApi(): Promise<ApiResponse> {
  const country = "jp"
const key = process.env.NEWSAPI_KEY; //
  const articles = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`,
  ).then((res) => res.json());

  //@ts-ignore
  return articles as ApiResponse;
}

async function populateDb(entries: ApiResponse): Promise<void> {
  const payLoad = entries.articles
    .filter(
      (article) =>
        article.title &&
        article.source.name &&
        article.url &&
        article.urlToImage
    )
    .map((article) => ({
      title: article.title,
      author: article.author,
      content: article.content ?? "None",
      description: article.description,
      publishedAt: article.publishedAt,
      sourceName: article.source.name ?? "None",
      url: article.url,
      urlToImage: article.urlToImage,
    }));
  console.log(payLoad.slice(0, 10));
  await prisma.article.createMany({ data: payLoad });
  return;
}

export const startScheduledJob = async () => {
  const articleData = (await queryNewsApi()) as ApiResponse;
  // const job = schedule.scheduleJob("0 5 * * *", async () => {
  //   await populateDb(articleData);
  // });
  // @ts-ignore
  await populateDb(articleData);
  console.log(articleData);

  console.log("Scheduled job started");
};
