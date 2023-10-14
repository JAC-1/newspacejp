import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SavedNewsCard from "../components/SavedNews/NewsCard";

export default async function SavedNews() {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  const currentUser = await prisma.user.findUniqueOrThrow({
    where: { email: currentUserEmail },
  });
  const currentUserId = currentUser.id;

  const userSavedNews = await prisma.user.findUniqueOrThrow({
    where: { id: currentUserId },
    include: {
      savednews: {
        include: {
          article: true,
        },
      },
    },
  });

  const articles = userSavedNews.savednews.map((i) => i.article);

  // TODO: saved articles page formatting and routing

  return (
    <div>
      <h1 className="font-be text-7xl text-titleSize py-10">Saved</h1>
      <div className="flex justify-around flex-wrap gap-10 max-w-3xl my-20">
        {articles.map(async (article) => {
          if (article.id === null) return null;
          return (
            <SavedNewsCard
              id={article.id}
              title={article.title}
              image={article.urlToImage}
              date={article.publishedAt}
            />
          );
        })}
      </div>
    </div>
  );
}
