import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import BackButton from "@/app/components/SavedNews/BackButton";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await prisma.article.findUnique({ where: { id: params.id } });
  return { title: `Saved article: ${article?.title}` };
}

export default async function ArticlePage({ params }: Props) {
  const articles = await prisma.article.findUnique({
    where: { id: params.id },
  });
  const { urlToImage, sourceName, author, title, url, publishedAt } =
    articles ?? {};
  console.log(articles);

  return (
    <div className="flex flex-col col-start-2">
      <div
        id="news-container"
        className=" flex flex-col justify-self-center max-w-lg w-auto  mt-20"
      >
        <div id="heading" className="">
          <div id="image" className="w-full h-84">
            <img
              className="w-full h-full object-cover rounded-md"
              src={urlToImage ?? "../../public/newspaperbackground.jpg"}
              alt="article image"
            />
          </div>
          <div id="name-and-source" className="pb-10 pt-5">
            <h3 className="text-xl text-right">{sourceName}</h3>
            <h4 className="text-lg text-right">
              <span className="text-xs pr-2">publisher:</span>
              {author}
            </h4>
          </div>
          <h1 className="text-sans text-3xl  mb-10">{title}</h1>
        </div>
      </div>

      <div className="">{publishedAt ?? null}</div>
      <a
        href={url}
        target="_blank"
        className="text-md self-center m-4 mt-12 py-1 px-4 bg-neutral-700 hover:bg-customPink  rounded-md"
      >
        Read More
      </a>
      <div className="w-auto flex flex-row md:gap-10 gap-5 justify-center h-80 mt-12 mb-20">
        <BackButton />
      </div>
    </div>
  );
}
