import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchClient } from "@/components/search-client";
import { DisplayHeading, Eyebrow } from "@/components/editorial-text";
import { Frame } from "@/components/frame";
export const metadata: Metadata = {
  title: "Search",
  description: "Search the Offscript sample issue.",
};
export default function SearchPage() {
  return (
    <Frame as="section" className="py-16 min-[641px]:py-[88px]">
      <header className="max-w-[700px] pb-14 [animation:lead-copy-in_.65s_var(--ease-editorial)_both]">
        <Eyebrow>Archive</Eyebrow>
        <DisplayHeading className="text-[clamp(3.5rem,7vw,6rem)]">
          Find a story
        </DisplayHeading>
        <p className="mt-6 font-editorial text-[1.15rem] leading-[1.6]">
          Search the original sample issue by title, author, phrase, topic, or
          year.
        </p>
      </header>
      <Suspense
        fallback={
          <p className="my-12 max-w-[580px] font-editorial text-[1.1rem] leading-[1.6]">
            Preparing the archive.
          </p>
        }
      >
        <SearchClient />
      </Suspense>
    </Frame>
  );
}
