export type Topic = "culture" | "design" | "people";
export type Format = "Essay" | "Interview" | "Profile";

export type Author = {
  name: string;
  slug: string;
  bio: string;
};

export type BodyBlock =
  | { type: "paragraph" | "heading"; text: string }
  | { type: "quote"; text: string; attribution: string };

export type Article = {
  title: string;
  slug: string;
  deck: string;
  author: Author;
  topic: Topic;
  publishedAt: string;
  coverMedia: string;
  altText: string;
  bodyBlocks: BodyBlock[];
  tags: string[];
  format: Format;
  relatedArticleIds: string[];
};
