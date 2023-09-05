"use client"

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useState } from "react";

interface Params {
  arrow: string;
  articleId: string;
}

export default function BigButton({ arrow, articleId  }: Params) {
  // TODO: Tailwind can't use literals with hover?
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
      console.log(res)
      setIsSaving(false)
      startTransition(() => {
        router.refresh()
      })
    } catch (e) {
      console.log("An error has occured: ", e);
    }


    
  };

  return (
    <button
      onClick={save}
      className="text-md bg-customGrey transition duration-500 hover:bg-blue-300 hover:text-neutral-700 font-bold h-bigBH w-bigBW rounded-md"
    >
      {!isMutating ? "Save" : "..."}
    </button>
  );
}

      // Save<span className="pl-2">{arrow}</span>
