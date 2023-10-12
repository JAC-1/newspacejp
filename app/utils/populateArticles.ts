import { prisma } from "@/lib/prisma";

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

async function queryNewsApi(country: string): Promise<ApiResponse> {
  const key = process.env.NEWSAPI_KEY;
  const articles = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`,
    { cache: "no-store" } // Make sure it doesn't cache the response
  ).then((res) => res.json());
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
  console.log(payLoad);
  await prisma.article.createMany({ data: payLoad, skipDuplicates: true });
  return;
}

export const startScheduledJob = async (country: string) => {
  const articleData = (await queryNewsApi(country)) as ApiResponse;
  // const job = schedule.scheduleJob("0 5 * * *", async () => {
  //   await populateDb(articleData);
  // });
  // @ts-ignore
  await populateDb(articleData);
  return articleData;
};
