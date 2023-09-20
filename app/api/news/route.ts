import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { startScheduledJob } from "@/app/utils/populateArticles";
import { json } from "stream/consumers";
import { prisma } from "@/lib/prisma";


export async function GET() {

  const data = await prisma.article.findMany({take: 10})

  // const key = process.env.BINGNEWSKEY;
  // const japanese = "ja-jp";
  // const unitedStates = "en-us";
  // const url = `https://api.bing.microsoft.com/v7.0/news?mkt=${japanese}&category=sports`;
  // const data = await fetch(url, {
  //   headers: {
  //     "Ocp-Apim-Subscription-Key": "fef3197abc154e18a28c68c024073023",
  //   },
  // }).then((res) => res.json());
  return NextResponse.json(data);
}
