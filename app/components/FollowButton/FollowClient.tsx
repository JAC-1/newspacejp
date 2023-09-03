"user client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default async function ClientButton(
  { targetUserId, isFollowing }: Props,
) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition(); // React hook that can tell if a loading state is still pending.
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isFollowing;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(true);

    console.log(res);

    startTransition(() => {
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });

    setIsFetching(false);
    startTransition(() => router.refresh());
  };

  if (isFollowing) {
    return (
      <button onClick={unfollow}>
        {!isMutating ? "Unfollow" : "..."}
      </button>
    );
  } else {
    return (
      <button onClick={follow}>
        {!isMutating ? "Follow" : "..."}
      </button>
    );
  }
}
