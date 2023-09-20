import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  const currentUser = await prisma.user.findUniqueOrThrow({
    where: { email: currentUserEmail },
  });
  const currentUserId = currentUser.id;

  const userSavedNews = await prisma.user.findUniqueOrThrow({
    where: { id: currentUserId },
    include: {
      savednews: {
        include: {
          article: true
        }
      }
    }
  });

  // const articleIds = userSavedNews.savednews.map(i => i.articleId)

  return NextResponse.json(userSavedNews);
}
