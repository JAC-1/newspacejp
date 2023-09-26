import { getServerSession } from "next-auth";
import NewsCard from "../components/NewsCard/NewsCard";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";

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

  // TODO: saved articles cards
  // TODO: saved articles page formatting and routing

  return (
    <div>
      <h1>Saved News</h1>
      <div>
        {articles.map((article) => {
          return <NewsCard {...article} />;
        })}
      </div>
    </div>
  );
}
