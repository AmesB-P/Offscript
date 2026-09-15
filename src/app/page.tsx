import { ArticleCard } from "@/components/article-card";
import { Byline, DisplayHeading, Eyebrow } from "@/components/editorial-text";
import { Frame } from "@/components/frame";
import { articles, topicLabels } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const [lead, second, third, ...latest] = articles;
  return (
    <>
      <section className="border-b border-ink/40 py-3 font-mono text-[0.68rem] leading-[1.5] font-semibold tracking-[0.035em]">
        <Frame>
          Portfolio concept. This issue contains original sample stories and
          imagery.
        </Frame>
      </section>
      <Frame
        as="section"
        className="grid items-end gap-[clamp(28px,6vw,96px)] py-12 pb-14 min-[641px]:grid-cols-[.86fr_1.14fr] min-[641px]:py-20 min-[641px]:pb-[72px]"
      >
        <div className="pb-3 [animation:lead-copy-in_.7s_var(--ease-editorial)_both]">
          <Eyebrow>
            {topicLabels[lead.topic]} / {lead.format}
          </Eyebrow>
          <DisplayHeading className="text-[clamp(2.75rem,12vw,3.125rem)] min-[641px]:text-[clamp(3.5rem,6.5vw,5.5rem)]">
            <Link
              className="transition-colors duration-200 ease-editorial hover:text-accent"
              href={`/articles/${lead.slug}`}
            >
              {lead.title}
            </Link>
          </DisplayHeading>
          <p className="mt-7 mb-[18px] max-w-[36rem] font-editorial text-[1.08rem] leading-[1.6] text-pretty">
            {lead.deck}
          </p>
          <Byline>By {lead.author.name}</Byline>
        </div>
        <Link
          className="order-first relative block min-h-[380px] overflow-hidden rounded-editorial bg-surface shadow-[0_22px_50px_rgb(100_47_38_/_14%)] [animation:lead-mask-in_.9s_var(--ease-editorial)_both] min-[641px]:order-none min-[641px]:min-h-[440px] lg:min-h-[560px]"
          href={`/articles/${lead.slug}`}
        >
          <Image
            className="object-cover transition-[transform,filter] duration-[400ms] ease-editorial hover:scale-[1.025] hover:saturate-[1.04] hover:contrast-[1.02]"
            src={lead.coverMedia}
            alt={lead.altText}
            fill
            loading="eager"
            sizes="(max-width: 640px) 100vw, 56vw"
          />
        </Link>
      </Frame>
      <Frame
        as="section"
        className="grid gap-10 pb-16 min-[641px]:grid-cols-2 min-[641px]:pb-24"
      >
        <ArticleCard article={second} />
        <ArticleCard article={third} />
      </Frame>
      <Frame
        as="section"
        className="border-t border-ink/40 pt-8 pb-16 min-[641px]:pb-24"
      >
        <Eyebrow>Latest</Eyebrow>
        <DisplayHeading
          as="h2"
          className="mb-10 text-[clamp(2.5rem,4vw,4.25rem)]"
        >
          More to linger with
        </DisplayHeading>
        <div className="grid gap-8 min-[641px]:grid-cols-2 lg:grid-cols-[1.35fr_.85fr_.85fr]">
          {latest.map((a, index) => (
            <ArticleCard
              key={a.slug}
              article={a}
              className={
                index === 0 ? "lg:row-span-2 lg:[&>a]:aspect-[3/4]" : ""
              }
            />
          ))}
        </div>
      </Frame>
    </>
  );
}
