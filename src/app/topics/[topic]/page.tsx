import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { DisplayHeading, Eyebrow } from "@/components/editorial-text";
import { Frame } from "@/components/frame";
import {
  getArticlesByTopic,
  isTopic,
  topicLabels,
  topics,
  topicStatements,
} from "@/lib/content";
export function generateStaticParams() {
  return topics.map((topic) => ({ topic }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const topic = (await params).topic;
  return isTopic(topic)
    ? {
        title: topicLabels[topic],
        description: topicStatements[topic],
        alternates: { canonical: `/topics/${topic}` },
      }
    : {};
}
export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const topic = (await params).topic;
  if (!isTopic(topic)) notFound();
  return (
    <Frame as="section" className="py-16 min-[641px]:py-[88px]">
      <header className="max-w-[700px] pb-14 [animation:lead-copy-in_.65s_var(--ease-editorial)_both]">
        <Eyebrow>Topic</Eyebrow>
        <DisplayHeading className="text-[clamp(3.5rem,7vw,6rem)]">
          {topicLabels[topic]}
        </DisplayHeading>
        <p className="mt-6 font-editorial text-[1.15rem] leading-[1.6]">
          {topicStatements[topic]}
        </p>
      </header>
      <div className="grid gap-10 border-t border-ink/40 pt-8 min-[641px]:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {getArticlesByTopic(topic).map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </Frame>
  );
}
