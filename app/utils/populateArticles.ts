import { prisma } from "@/lib/prisma";
import { JsonQuery } from "@prisma/client/runtime/library";
import schedule from "node-schedule";

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
  const key = process.env.NEWSAPIKEY; //
  const articles = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${key}`
  ).then((res) => res.json);

  //@ts-ignore
  return articles as ApiResponse;
}

async function populateDb(entries: Promise<ApiResponse>): Promise<void> {
  //@ts-ignore
  const payLoad = (await entries).articles.reduce((acc, curVal) => {
    const structure = {
      title: curVal.title,
      author: curVal.author,
      content: curVal.content ?? "None",
      description: curVal.description,
      publishedAt: curVal.publishedAt,
      sourceName: curVal.source.name ?? "None",
      url: curVal.url,
      urlToImage: curVal.urlToImage,
    };
    return [...acc, structure];
  }, []);
  
  await prisma.article.updateMany({data: payLoad})
  return

}

export const startScheduledJob = () => {
  const articleData = queryNewsApi();
  const job = schedule.scheduleJob("0 5 * * *", async () => {
    await populateDb(articleData);
  });

  console.log("Scheduled job started");
};
