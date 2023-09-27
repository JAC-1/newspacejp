"use client";

import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

interface Params {
  arrow: string;
  articleId: string;
}

// TODO: If the article is already saved, change the button to "Saved" and style it differently

export default function BigButton({ arrow, articleId }: Params) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isSaving, setIsSaving] = useState(false);
  const isMutating = isSaving || isPending;

  const save = async () => {
    setIsSaving(true);

    try {
      const res = await fetch("/api/saveNews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ articleId: articleId }),
      });

      setIsSaving(false);
      startTransition(() => router.refresh());
    } catch (e) {
      console.log(`An error has occured: ${e}`);
    }
  };

  return (
    <button
      onClick={() => save()}
      className="text-md bg-customGrey transition duration-500 hover:bg-blue-300 hover:text-neutral-700 font-bold md:h-bigBH md:w-bigBW w-smBW h-smBH rounded-md"
    >
      {!isMutating ? "Save" : <p className="animate-pulse">...</p>}
    </button>
  );
}
