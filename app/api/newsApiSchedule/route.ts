import { startScheduledJob } from "@/app/utils/populateArticles";
import { NextResponse } from "next/server";

// http://localhost:3000/api/newsApiSchedule?country=us

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get("country") ?? "jp";
  try {
    const data = await startScheduledJob(country);
    return NextResponse.json({
      success: true,
      message: "Articles added",
      data: { ...data },
    });
  } catch (e) {
    return NextResponse.json({ success: false, message: `${e}` });
  }
}
