import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Masthead } from "@/components/masthead";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://offscript.example"),
  title: { default: "Offscript", template: "%s | Offscript" },
  description:
    "An original-sample independent publication about culture, design, and people.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          className="fixed top-[-60px] left-5 z-10 rounded-editorial bg-ink px-4 py-3 font-mono text-[0.75rem] leading-[1.2] font-semibold text-paper transition-[top] duration-200 ease-editorial focus:top-4"
          href="#content"
        >
          Skip to content
        </a>
        <Masthead />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
