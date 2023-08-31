import { startScheduledJob } from "@/app/utils/populateArticles";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await startScheduledJob();
    return NextResponse.json({ message: "Schedule Job Started" });
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: "An error occured" });
  }
}
