export const SITE = {
  title: "Bunzu",
  description: "How to create syntax diagrams for Japanese sentences",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
  // Japanese: "jp",
} as const;

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/wrex/bunzu.doiwalters.com`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    Basics: [
      { text: "Introduction", link: "en/introduction" },
      { text: "Content notes", link: "en/content" },
    ],
    Grammar: [
      { text: "Parts of speech", link: "en/parts-of-speech" },
      { text: "用言 (predicate words)", link: "en/yougen" },
      { text: "体言 and other", link: "en/taigen" },
      { text: "文節 (clauses)", link: "en/bunsetsu" },
    ],
    Diagramming: [
      { text: "How to", link: "en/howto" },
      { text: "Examples", link: "en/examples" },
    ],
    Afterword: [
      { text: "Recommended tools", link: "en/tools" },
      { text: "About", link: "en/about" },
      { text: "Feedback", link: "en/feedback" },
    ],
  },
};
