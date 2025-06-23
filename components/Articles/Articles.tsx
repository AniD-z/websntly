"use client";

import { useArticleContext } from "@/hooks/useArticleContext";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Articles() {
  const { data } = useArticleContext();
  const [selectedLabel, setSelectedLabel] = useState("All");

  const labels: string[] = [
    "All",
    ...new Set(
      data.flatMap((article) => article.articles.map((item) => item.label))
    ),
  ];

  const filteredArticles = data.flatMap((article) =>
    article.articles
      .filter((item) =>
        selectedLabel === "All" ? true : selectedLabel === item.label
      )
      .map((item) => ({
        ...item,
        author: article.author,
      }))
  );

  return (
    <div className="max-w-[95rem] w-full mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black border-collapse mb-48">
        {filteredArticles.map((articleData, index) => (
          <article className="border border-black p-8" key={index}>
            <div className="flex items-center justify-between">
              <time dateTime={articleData.date}>{articleData.date}</time>
            </div>
            <Link href={`magazine/${articleData.slug}`}>
              <img
                className="w-full my-8 hover:scale-105 transition"
                src={articleData.img}
                alt={articleData.imgAlt}
              />
            </Link>
            <h2 className="heading3-title mb-3">
              <Link href={`/magazine/${articleData.slug}`}>
                {articleData.title}
              </Link>
            </h2>
            
          </article>
        ))}
      </div>
    </div>
  );
}
