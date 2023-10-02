"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SignInButton() {
  const [showImage, setShowImage] = useState(false);

  // TODO : Prevent the green success notification from showing up when you refresh the page, or open the hamburger menu.

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      const timeoutId = setTimeout(() => {
        setShowImage(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="animate-pulse text-black bg-white rounded-md px-3 py-1">
        Authenticating
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <Link href={`/dashboard`}>
        {showImage ? (
          <Image
            src={session.user?.image ?? "../../public/mememan.webp.png"}
            width={32}
            height={32}
            alt="Your Name"
          />
        ) : (
          <div className="text-white bg-green-400 rounded-md px-3 py-1">
            Success!
          </div>
        )}
      </Link>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}

// export function SignOutButton() {
//   return (
//     <Link href={"/"}>
//       <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
//     </Link>
//   );
// }
