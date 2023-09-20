import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email!;
  const userId = await prisma.user.findUnique({
    where: { email: userEmail },
  }).then((user) => user?.id);
  
  const { articleId } = await req.json();
  
  const record = await prisma.savedNews.create({
    data: {
      user: { connect: { id: userId } },
      article: { connect: { id: articleId } },
    },
  });
  return NextResponse.json(record) 
}
