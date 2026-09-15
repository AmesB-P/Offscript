import type { Article, BodyBlock, Topic } from "@/lib/types";

export const topics: Topic[] = ["culture", "design", "people"];

const authors = {
  mira: {
    name: "Mira Sato",
    slug: "mira-sato",
    bio: "A fictional writer interested in public rooms and private rituals.",
  },
  owen: {
    name: "Owen Bell",
    slug: "owen-bell",
    bio: "A fictional editor writing about tools, spaces, and working lives.",
  },
  leila: {
    name: "Leila Rahman",
    slug: "leila-rahman",
    bio: "A fictional reporter following craft and neighbourhood culture.",
  },
};

const p = (text: string): BodyBlock => ({ type: "paragraph", text });
const h = (text: string): BodyBlock => ({ type: "heading", text });
const q = (text: string, attribution: string): BodyBlock => ({
  type: "quote",
  text,
  attribution,
});

export const topicLabels: Record<Topic, string> = {
  culture: "Culture",
  design: "Design",
  people: "People",
};
export const topicStatements: Record<Topic, string> = {
  culture: "Ways we gather, make meaning, and pass things along.",
  design: "Objects, rooms, and systems shaped with attention.",
  people: "Lives and practices that make a place feel more possible.",
};

export const articles: Article[] = [
  {
    title: "What a local station leaves on after midnight",
    slug: "what-a-local-station-leaves-on-after-midnight",
    deck: "A small radio room makes space for music that refuses to hurry.",
    author: authors.mira,
    topic: "culture",
    publishedAt: "2026-08-28",
    coverMedia: "/assets/illustrations/culture-midnight-radio.png",
    altText:
      "Editorial illustration of two people working in a late-night community radio room with records, turntable, mixer, and microphone.",
    format: "Essay",
    tags: ["radio", "listening", "city life"],
    relatedArticleIds: [
      "the-shape-of-a-chair-after-use",
      "the-long-table-at-north-market",
    ],
    bodyBlocks: [
      p(
        "This is original sample writing for a portfolio concept. In the hour after midnight, the studio becomes a room where someone is listening carefully enough to choose the next record.",
      ),
      h("The useful pause"),
      p(
        "Between songs there are small silences: a sleeve returned to its shelf, a cup set down, a producer breathing near an open microphone. Those pauses carry a kind of local knowledge.",
      ),
      q(
        "The room teaches you that a gap can be part of the programme.",
        "Nora Vale, fictional presenter",
      ),
      p(
        "A station like this makes its own weather. The sound is selected, offered, and allowed to settle in the apartment of whoever happens to be awake.",
      ),
    ],
  },
  {
    title: "The shape of a chair after use",
    slug: "the-shape-of-a-chair-after-use",
    deck: "A conversation about repair, posture, and the quiet evidence left by a body.",
    author: authors.owen,
    topic: "design",
    publishedAt: "2026-08-18",
    coverMedia: "/assets/illustrations/design-chair-after-use.png",
    altText:
      "Editorial illustration of a worn wooden chair with visible repair joints, tools, and a replacement seat in a working studio.",
    format: "Interview",
    tags: ["furniture", "repair", "interview"],
    relatedArticleIds: [
      "a-room-built-for-noticing",
      "what-a-local-station-leaves-on-after-midnight",
    ],
    bodyBlocks: [
      p(
        "This is an original sample interview for a portfolio concept. A well-used chair records more than wear. Its softened edges and shifted joints describe how a person returned to it, day after day.",
      ),
      h("Make room for change"),
      p(
        "Our fictional designer begins with the question of what may be adjusted later. A replaceable seat and a visible fixing are invitations to keep an object in a life.",
      ),
      q(
        "I want the repair to look like another chapter, not an apology.",
        "Eli Mercer, fictional furniture maker",
      ),
      p(
        "The chair does not demand reverence. It asks to be sat in, moved, and eventually understood.",
      ),
    ],
  },
  {
    title: "A room built for noticing",
    slug: "a-room-built-for-noticing",
    deck: "Why a working studio can be more generous when it leaves some things unresolved.",
    author: authors.owen,
    topic: "design",
    publishedAt: "2026-07-31",
    coverMedia: "/assets/illustrations/design-room-for-noticing.png",
    altText:
      "Editorial illustration of a working studio table with paper studies, material samples, models, and window light.",
    format: "Essay",
    tags: ["studios", "space", "attention"],
    relatedArticleIds: [
      "the-shape-of-a-chair-after-use",
      "clay-keeps-its-own-clock",
    ],
    bodyBlocks: [
      p(
        "This is original sample writing for a portfolio concept. A studio does not need to look finished in order to be useful. Its value can sit in the drafts on the wall and the question that has not yet found a name.",
      ),
      h("Useful evidence"),
      p(
        "The rooms that encourage noticing tend to show their working parts. Materials stay close to hand. Light arrives from one reliable direction.",
      ),
      p(
        "This kind of order leaves enough friction for an idea to catch. It makes a case for rooms that support concentration without pretending to be neutral.",
      ),
    ],
  },
  {
    title: "Clay keeps its own clock",
    slug: "clay-keeps-its-own-clock",
    deck: "A fictional profile of a maker whose days are measured by drying, firing, and return.",
    author: authors.leila,
    topic: "people",
    publishedAt: "2026-07-14",
    coverMedia: "/assets/illustrations/people-clay-clock.png",
    altText:
      "Editorial illustration of a ceramicist shaping a vessel at a wheel with drying forms on studio shelves.",
    format: "Profile",
    tags: ["craft", "ceramics", "practice"],
    relatedArticleIds: [
      "the-long-table-at-north-market",
      "a-room-built-for-noticing",
    ],
    bodyBlocks: [
      p(
        "This is an original sample profile for a portfolio concept. The fictional ceramicist Amara Venn plans her day around the point when a form stops accepting pressure.",
      ),
      h("A patient material"),
      p(
        "The studio contains a collection of incomplete things. Some are waiting to dry. Some will be cut down and remade. The shelves are a record of timing.",
      ),
      q(
        "The work is clearer when I stop trying to persuade it to happen today.",
        "Amara Venn, fictional ceramicist",
      ),
      p(
        "Each vessel holds a small decision about pressure, rest, and when to begin again.",
      ),
    ],
  },
  {
    title: "The long table at North Market",
    slug: "the-long-table-at-north-market",
    deck: "On the public rituals that form around a shared place to eat.",
    author: authors.mira,
    topic: "culture",
    publishedAt: "2026-06-20",
    coverMedia: "/assets/illustrations/culture-north-market-table.png",
    altText:
      "Editorial illustration of neighbours gathering around a long market table with shared dishes and produce.",
    format: "Essay",
    tags: ["food", "public space", "ritual"],
    relatedArticleIds: [
      "what-a-local-station-leaves-on-after-midnight",
      "clay-keeps-its-own-clock",
    ],
    bodyBlocks: [
      p(
        "This is original sample writing for a portfolio concept. The long table has no reservation system in this imagined market. It is a practical answer to a crowded room and an accidental invitation to sit beside someone new.",
      ),
      h("A shared surface"),
      p(
        "People arrive with bags and a small amount of time. The table changes the scale of the visit. Lunch becomes an occasion to watch the room negotiate its own manners.",
      ),
      p(
        "Its strength is the simple way a shared surface makes strangers briefly accountable to one another.",
      ),
    ],
  },
  {
    title: "A coat repaired in public",
    slug: "a-coat-repaired-in-public",
    deck: "A fictional repair table makes care visible without turning it into a performance.",
    author: authors.leila,
    topic: "people",
    publishedAt: "2026-06-06",
    coverMedia: "/assets/illustrations/people-coat-repair.png",
    altText:
      "Editorial illustration of hands mending a worn coat with needle, thread, patches, and a street-facing window.",
    format: "Profile",
    tags: ["repair", "clothing", "care"],
    relatedArticleIds: [
      "the-shape-of-a-chair-after-use",
      "the-long-table-at-north-market",
    ],
    bodyBlocks: [
      p(
        "This is an original sample profile for a portfolio concept. Once a week, a fictional tailor clears a table near the front window and mends coats while people pass by.",
      ),
      h("Care in view"),
      p(
        "A torn lining or worn elbow is handled as ordinary evidence, not a defect to hide. A repair becomes a small lesson in how an object is made.",
      ),
      p(
        "The table does not promise a perfect return to newness. It offers a useful continuation.",
      ),
    ],
  },
  {
    title: "The borrowed shelf",
    slug: "the-borrowed-shelf",
    deck: "How a small exchange library turns ownership into a conversation.",
    author: authors.mira,
    topic: "culture",
    publishedAt: "2025-11-19",
    coverMedia: "/assets/illustrations/culture-borrowed-shelf.png",
    altText:
      "Editorial illustration of two hands exchanging a book in front of a small neighbourhood shelf with an empty space.",
    format: "Essay",
    tags: ["books", "sharing", "neighbourhood"],
    relatedArticleIds: [
      "the-long-table-at-north-market",
      "what-a-local-station-leaves-on-after-midnight",
    ],
    bodyBlocks: [
      p(
        "This is original sample writing for a portfolio concept. A borrowed shelf begins with the ordinary promise that an item will travel. A book leaves one home, enters another, and returns carrying a little less certainty about who it belongs to.",
      ),
      h("A visible exchange"),
      p(
        "The shelf works because it is not over-explained. A handwritten note, a returned spine, and an empty space can be enough to make people understand the invitation.",
      ),
      p(
        "It turns a hallway into a place where private collections have a public afterlife.",
      ),
    ],
  },
];

export const isTopic = (value: string): value is Topic =>
  topics.includes(value as Topic);
export const getArticle = (slug: string) =>
  articles.find((article) => article.slug === slug);
export const getArticlesByTopic = (topic: Topic) =>
  articles.filter((article) => article.topic === topic);
export const relatedArticles = (article: Article) =>
  article.relatedArticleIds
    .map(getArticle)
    .filter((item): item is Article => Boolean(item));
export const normalize = (value: string) => value.trim().toLocaleLowerCase();
export const searchableText = (article: Article) =>
  [
    article.title,
    article.deck,
    article.author.name,
    article.tags.join(" "),
    ...article.bodyBlocks.map((block) => block.text),
  ].join(" ");
export const searchArticles = (query: string, topic?: Topic, year?: string) =>
  articles.filter(
    (article) =>
      (!normalize(query) ||
        normalize(searchableText(article)).includes(normalize(query))) &&
      (!topic || article.topic === topic) &&
      (!year || article.publishedAt.startsWith(year)),
  );
