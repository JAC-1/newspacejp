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
      <h1 className="font-be text-7xl text-titleSize md:px-16 text-center pt-5 md:py-10">Profile</h1>
      <div className="w-2/3 max-w-4xl self-center flex-1">
        <ProfileForm user={user} className="self-center" />
      </div>
    </div>
  );
}

// TODO:
// - Form data -> stateful object
// - button onclick -> send form data object
// - Move fetch in component to server side
// - Server comp. state -> Profileform -> input comp.
