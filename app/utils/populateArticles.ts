import { prisma } from "@/lib/prisma";
import { JsonQuery } from "@prisma/client/runtime/library";

interface ApiResponse {
  status: string;
  totalResults: number;
  value: ArticleData[];
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
  const key = process.env.BINGNEWSKEY;
  const japanese = "ja-jp";
  const unitedStates = "en-us";
  const url = `https://api.bing.microsoft.com/v7.0/news?mkt=${japanese}&category=sports`;
  const articles = await fetch(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": "fef3197abc154e18a28c68c024073023",
    },
  }).then((res) => res.json());

  //@ts-ignore
  return articles as ApiResponse;
}
// TODO:
// - Fix interface and map to reflect new api (bing)
// - We use bing because it has less bs in the headers and such

async function populateDb(entries: ApiResponse): Promise<void> {
  const payLoad = entries.value
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
