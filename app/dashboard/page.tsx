import ServerForm from "./ProfileServerForm";
import { signOut } from "next-auth/react";
import SignInButton from "../components/Nav/LoginButton";
import SignOutButton from "./SignOutButton";

export default async function Dashboard() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="font-be text-7xl text-titleSize md:px-16 text-center pt-5 md:py-10">
        Profile
      </h1>
      <div className="w-2/3 max-w-4xl self-center flex-1">
        <ServerForm />
      </div>
      <SignOutButton />
    </div>
  );
}
