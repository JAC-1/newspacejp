import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email!;
  const { targetUserId } = await req.json();

  const currentUserId = await prisma.user
    .findUnique({ where: { email: userEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.create({
    data: { followerId: currentUserId, followingId: targetUserId },
  });

  return NextResponse.json(record);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email!;
  // Get the value from the url as a search param = pass in targetUserId in the url itself
  const targetUserId = req.nextUrl.searchParams.get("targetUserId");

  const currentUserId = await prisma.user
    .findUnique({ where: { email: userEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        // to test for entry matches; I think this block @@id([followerId, followingId]) in the schema is related
        followerId: currentUserId,
        followingId: targetUserId!,
      },
    },
  });

  return NextResponse.json(record);
}
