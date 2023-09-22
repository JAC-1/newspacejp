import { startScheduledJob } from "@/app/utils/populateArticles";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await startScheduledJob();
    return NextResponse.json({ success: true, message: "Articles added" ,  data: {...data} });
  } catch (e) {
    return NextResponse.json({ success: false, message: `${e}`  });
  }
}
