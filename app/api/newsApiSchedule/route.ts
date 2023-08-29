import { startScheduledJob } from "@/app/utils/populateArticles";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    startScheduledJob();
    return NextResponse.json({ message: "Schedule Job Started" });
  } catch (e) {
    // const errorMsg = e?.toString()
    return NextResponse.json({ error: "An error occured" });
  }
}
