import { Frame } from "./frame";

export function Footer() {
  return (
    <footer className="bg-field py-11 text-paper min-[641px]:py-14">
      <Frame className="grid gap-2.5">
        <p className="m-0 font-editorial text-[1.75rem] leading-none font-semibold tracking-[-0.04em]">
          Offscript<span className="text-accent">.</span>
        </p>
        <p className="m-0 text-[0.8rem]">Good things. Outside the lines.</p>
        <p className="m-0 text-[0.8rem] text-[rgb(237_223_200_/_82%)]">
          Portfolio concept. All writing and imagery are original samples.
        </p>
      </Frame>
    </footer>
  );
}
