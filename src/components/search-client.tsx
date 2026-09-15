"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { ArticleCard } from "./article-card";
import { FilterSelect } from "./filter-select";
import { isTopic, searchArticles, topics } from "@/lib/content";
export function SearchClient() {
  const router = useRouter(),
    params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? ""),
    [topic, setTopic] = useState(params.get("topic") ?? ""),
    [year, setYear] = useState(params.get("year") ?? "");
  const rawTopic = params.get("topic") ?? "";
  const results = useMemo(
    () =>
      searchArticles(
        params.get("q") ?? "",
        isTopic(rawTopic) ? rawTopic : undefined,
        params.get("year") ?? undefined,
      ),
    [params, rawTopic],
  );
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next = new URLSearchParams();
    if (query.trim()) next.set("q", query.trim());
    if (topic) next.set("topic", topic);
    if (year) next.set("year", year);
    router.push(`/search${next.size ? `?${next}` : ""}`);
  };
  const active = Boolean(
    params.get("q") || params.get("topic") || params.get("year"),
  );
  return (
    <>
      <form
        className="max-w-[760px] rounded-editorial border border-ink/70 bg-surface p-7 shadow-[0_16px_36px_rgb(100_47_38_/_10%)]"
        onSubmit={submit}
      >
        <label
          className="grid gap-2 font-mono text-[0.7rem] leading-[1.3] font-semibold tracking-[0.02em]"
          htmlFor="query"
        >
          Search the sample issue
        </label>
        <div className="mt-2.5 flex flex-col gap-2.5 min-[641px]:flex-row min-[641px]:gap-0">
          <input
            className="min-h-12 min-w-0 flex-1 rounded-editorial border border-ink/70 bg-paper px-3.5 text-[0.95rem] leading-[1.4] transition-[border-color,box-shadow] duration-200 ease-editorial placeholder:text-ink/70 hover:border-accent min-[641px]:rounded-r-none"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Title, author, or a phrase"
          />
          <button className="min-h-12 cursor-pointer rounded-editorial border border-ink bg-ink px-5 font-mono text-[0.72rem] leading-[1.2] font-semibold text-paper transition-[transform,background] duration-200 ease-editorial hover:bg-field active:translate-y-px min-[641px]:rounded-l-none">
            Search
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-4 min-[641px]:flex-row">
          <FilterSelect
            label="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="">All topics</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t[0].toUpperCase() + t.slice(1)}
              </option>
            ))}
          </FilterSelect>
          <FilterSelect
            label="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">All years</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
          </FilterSelect>
        </div>
      </form>
      {!active ? (
        <p className="my-12 max-w-[580px] font-editorial text-[1.1rem] leading-[1.6]">
          Search titles, authors, topics, tags, and article text from this
          sample issue.
        </p>
      ) : results.length ? (
        <div
          className="mt-16 grid gap-10 border-t border-ink/40 pt-8 min-[641px]:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          aria-live="polite"
        >
          {results.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p
          className="my-12 max-w-[580px] font-editorial text-[1.1rem] leading-[1.6]"
          role="status"
        >
          No stories match those terms. Try a broader phrase or clear a filter.
        </p>
      )}
    </>
  );
}
