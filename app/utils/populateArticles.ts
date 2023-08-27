import { prisma } from "@/lib/prisma";
import { JsonQuery } from "@prisma/client/runtime/library";
import schedule from 'node-schedule';


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
    `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${key}`,
  ).then((res) => res.json);

  //@ts-ignore
  return articles as ApiResponse;
}

async function populateDb(entries: Promise<ApiResponse>): Promise<void> {
  // @ts-ignore
  entries.articles.map( async article  => {
    await prisma.article.create({
      data: {
        title: article.title,
        author: article.author,
        content: article.content ?? "None",
        description: article.description,
        publishedAt: article.publishedAt,
        sourceName: article.source.name ?? "None",
        url: article.url,
        urlToImage: article.urlToImage,
      }
    })
  })
  return;
}



export const startScheduledJob = () => {
  const articleData = queryNewsApi()
  const job = schedule.scheduleJob('0 5 * * *', async () => {
    await populateDb(articleData)
  });

  console.log('Scheduled job started');
};
