import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// export async function GET() {
//   const users = await prisma.user.findMany();
//   return NextResponse.json(users);
// }

// Make a Post to update prisma.user using the users current email who is currently authenticated

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  const data = await req.json();
  data.age = Number(data.age);

  const user = await prisma.user.update({
    where: { email: currentUserEmail },
    data, // The actual data that the update will accept
  });

  return NextResponse.json(user);
}
