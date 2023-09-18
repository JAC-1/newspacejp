import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { ProfileForm } from "./ProfileForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  const currentEmail = session?.user?.email!;

  const user = await prisma.user.findUnique({
    where: { email: currentEmail },
  });
  return (
    <div className="flex flex-col w-full">
      <div className="text-5xl mt-16 lg:ml-20 lg:self-start self-center">Dashboard</div>
      <ProfileForm user={user} />
    </div>
  );
}

// TODO:
// - Form data -> stateful object
// - button onclick -> send form data object
// - Move fetch in component to server side
// - Server comp. state -> Profileform -> input comp.
