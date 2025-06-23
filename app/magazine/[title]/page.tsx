import { ArticleType, getArticles } from "@/app/functions/getArticles";
import PostNavigation from "@/components/PostNavigation";
import SocialSharing from "@/components/SocialSharing";
import Subheading from "@/components/Subheading";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}) {
  const articles: ArticleType[] = await getArticles();

  const articleData = articles.find((article) =>
    article.articles.find((articleItem) => articleItem.slug === params.title)
  );

  if (!articleData) {
    return <p>Article not found</p>;
  }

  const matchingArticle = articleData.articles.find(
    (articleItem) => articleItem.slug === params.title
  );

  return {
    title: `${matchingArticle?.title} | Fyrre Magazine`,
  };
}

export default async function ArticleDetails({
  params,
}: {
  params: { title: string };
}) {
  try {
    const articles: ArticleType[] = await getArticles();

    const articleData = articles.find((article) =>
      article.articles.find((articleItem) => articleItem.slug === params.title)
    );

    if (!articleData) {
      return <p>Article not found</p>;
    }

    const matchingArticle = articleData.articles.find(
      (articleItem) => articleItem.slug === params.title
    );

    const latestArticles = articles
      .flatMap((articleData) => articleData.articles)
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      })
      .slice(0, 3);

    if (!matchingArticle) {
      return (
        <main className="max-w-[95rem] w-full mx-auto px-4 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
          <p>Article not found</p>;
        </main>
      );
    }

    return (
      <main className="max-w-[95rem] w-full mx-auto px-4 md:pt-8 sm:pt-4 xs:pt-2 lg:pb-4 md:pb-4 sm:pb-2 xs:pb-2">
        <PostNavigation href="/magazine">Materials</PostNavigation>
        <article className="grid md:grid-cols-2 gap-6 md:gap-6 pb-6 md:pb-24">
          <h2 className="text-subtitle">{matchingArticle.title}</h2>
          <p>{matchingArticle.description}</p>
        </article>

        <div>
          <img
            src={matchingArticle.content[0].img}
            alt={matchingArticle.imgAlt}
          />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching article details:", error);
    return <p>Error fetching article details</p>;
  }
}
