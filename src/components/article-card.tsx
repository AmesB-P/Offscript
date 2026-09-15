import Image from "next/image";
import Link from "next/link";
import { topicLabels } from "@/lib/content";
import type { Article } from "@/lib/types";
import { Byline, DisplayHeading, Eyebrow } from "./editorial-text";
export function ArticleCard({
  article,
  priority = false,
  className = "",
}: {
  article: Article;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`group min-w-0 transition-transform duration-[250ms] ease-editorial hover:-translate-y-1 ${className}`}
    >
      <Link
        className="relative block aspect-[4/3] overflow-hidden rounded-editorial bg-surface shadow-[0_12px_28px_rgb(100_47_38_/_10%)]"
        href={`/articles/${article.slug}`}
      >
        <Image
          className="object-cover transition-[transform,filter] duration-[400ms] ease-editorial group-hover:scale-[1.025] group-hover:saturate-[1.04] group-hover:contrast-[1.02]"
          src={article.coverMedia}
          alt={article.altText}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
          priority={priority}
        />
      </Link>
      <div className="pt-5">
        <Eyebrow>
          {topicLabels[article.topic]} / {article.format}
        </Eyebrow>
        <DisplayHeading
          as="h2"
          className="text-[clamp(1.75rem,3vw,2.7rem)] leading-[1.05] tracking-[-0.035em]"
        >
          <Link
            className="transition-colors duration-200 ease-editorial hover:text-accent"
            href={`/articles/${article.slug}`}
          >
            {article.title}
          </Link>
        </DisplayHeading>
        <p className="my-3.5 mb-4.5 max-w-[32rem] font-editorial text-[1rem] leading-[1.6] text-pretty">
          {article.deck}
        </p>
        <Byline>By {article.author.name}</Byline>
      </div>
    </article>
  );
}
