import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { Byline, DisplayHeading, Eyebrow } from "@/components/editorial-text";
import { Frame } from "@/components/frame";
import {
  articles,
  getArticle,
  relatedArticles,
  topicLabels,
} from "@/lib/content";
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const article = getArticle((await params).slug);
  return article
    ? {
        title: article.title,
        description: article.deck,
        alternates: { canonical: `/articles/${article.slug}` },
        openGraph: {
          images: [{ url: article.coverMedia, alt: article.altText }],
        },
      }
    : {};
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const date = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${article.publishedAt}T12:00:00`));
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.deck,
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: article.author.name },
    image: article.coverMedia,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <article>
        <header className="mx-auto w-[calc(100%-40px)] max-w-[760px] py-16 pb-10 [animation:lead-copy-in_.65s_var(--ease-editorial)_both] min-[641px]:py-24 min-[641px]:pb-[52px]">
          <Eyebrow>
            {topicLabels[article.topic]} / {article.format}
          </Eyebrow>
          <DisplayHeading className="max-w-[14ch] text-[clamp(3rem,15vw,4.6rem)] min-[641px]:text-[clamp(3.5rem,7vw,6rem)]">
            {article.title}
          </DisplayHeading>
          <p className="mt-7 mb-6 max-w-[660px] font-editorial text-[clamp(1.2rem,2vw,1.5rem)] leading-[1.5] text-pretty">
            {article.deck}
          </p>
          <Byline>
            By {article.author.name} / {date}
          </Byline>
        </header>
        <figure className="relative mx-auto h-[max(340px,70vw)] w-full overflow-hidden bg-surface [animation:lead-mask-in_.9s_var(--ease-editorial)_both] min-[641px]:h-[min(68vw,760px)] min-[641px]:w-full min-[641px]:rounded-editorial lg:max-w-[1400px]">
          <Image
            className="object-cover"
            src={article.coverMedia}
            alt={article.altText}
            fill
            loading="eager"
            sizes="100vw"
          />
        </figure>
        <div className="mx-auto my-[52px] w-[calc(100%-40px)] max-w-[720px] font-editorial text-[1.05rem] leading-[1.78] min-[641px]:my-[72px] min-[641px]:text-[1.08rem] [&>p]:mb-7 [&>p]:mt-0 [&>h2]:mt-16 [&>h2]:mb-[22px] [&>h2]:text-[clamp(2.1rem,4vw,3.4rem)] [&>h2]:leading-[1.08] [&>h2]:font-medium [&>h2]:tracking-[-0.035em] [&>h2]:text-balance [&>blockquote]:my-10 [&>blockquote]:rounded-editorial [&>blockquote]:border [&>blockquote]:border-ink/70 [&>blockquote]:bg-surface [&>blockquote]:px-7 [&>blockquote]:py-6 [&>blockquote]:shadow-[0_14px_34px_rgb(100_47_38_/_10%)] [&>blockquote>p]:mb-3.5 [&>blockquote>p]:text-[clamp(1.55rem,3vw,2.3rem)] [&>blockquote>p]:leading-[1.2] [&>blockquote>p]:font-medium [&>blockquote>p]:tracking-[-0.025em] [&>blockquote>footer]:font-mono [&>blockquote>footer]:text-[0.7rem] [&>blockquote>footer]:leading-[1.3] [&>blockquote>footer]:font-semibold min-[641px]:[&>blockquote]:mx-[-48px] min-[641px]:[&>blockquote]:my-12">
          {article.bodyBlocks.map((b, i) =>
            b.type === "heading" ? (
              <h2 key={i}>{b.text}</h2>
            ) : b.type === "quote" ? (
              <blockquote key={i}>
                <p>{b.text}</p>
                <footer>{b.attribution}</footer>
              </blockquote>
            ) : (
              <p key={i}>{b.text}</p>
            ),
          )}
        </div>
        <footer className="mx-auto mb-24 flex w-[calc(100%-40px)] max-w-[720px] flex-wrap gap-x-4 gap-y-2 border-t border-ink/40 pt-6 font-mono text-[0.68rem] leading-[1.3] font-semibold">
          <span className="tracking-[0.08em] text-accent uppercase">
            Topics
          </span>
          {article.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </footer>
      </article>
      <Frame
        as="section"
        className="border-t border-ink/40 pt-8 pb-16 min-[641px]:pb-24"
      >
        <Eyebrow>Continue reading</Eyebrow>
        <DisplayHeading
          as="h2"
          className="mb-10 text-[clamp(2.5rem,4vw,4.25rem)]"
        >
          Related stories
        </DisplayHeading>
        <div className="grid gap-10 min-[641px]:grid-cols-2">
          {relatedArticles(article).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Frame>
    </>
  );
}
