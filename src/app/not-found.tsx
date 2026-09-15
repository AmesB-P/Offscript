import Link from "next/link";
import { DisplayHeading, Eyebrow } from "@/components/editorial-text";
import { Frame } from "@/components/frame";

export default function NotFound() {
  return (
    <Frame as="section" className="max-w-[900px] py-40">
      <Eyebrow>404</Eyebrow>
      <DisplayHeading className="text-[clamp(3.4rem,7vw,6rem)]">
        This page has wandered off.
      </DisplayHeading>
      <p className="max-w-[500px] font-editorial text-[1.15rem] leading-[1.6]">
        The story or topic you were looking for is not in this sample issue.
      </p>
      <Link
        className="mt-4 inline-block border-b border-accent font-mono text-[0.75rem] leading-[1.5] font-semibold"
        href="/"
      >
        Return home
      </Link>
    </Frame>
  );
}
