import { startScheduledJob } from "@/app/utils/populateArticles";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    startScheduledJob();
    NextResponse.json({ message: "Schedule Job Started" });
  } catch (e) {
    // const errorMsg = e?.toString()
    NextResponse.json({ error: "An error occured" });
  }
}
