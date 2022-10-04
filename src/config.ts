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

export const GITHUB_EDIT_URL = `https://github.com/wrex/bunzu.doiwalters.com/tree/main`;

export const COMMUNITY_INVITE_URL = `https://github.com/wrex/bunzu.doiwalters.com/issues`;

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
      { text: "Introduction", link: "en/grammar-intro" },
      { text: "1. Foundations", link: "en/grammar/1-foundations" },
      { text: "2. 用言 (predicate words)", link: "en/grammar/2-yougen" },
      { text: "3. 体言 and other", link: "en/grammar/3-non-yougen" },
      { text: "4. 助動詞 (aux-verbs)", link: "en/grammar/4-jodoushi" },
      { text: "5. 助詞 (particles)", link: "en/grammar/5-joshi" },
      { text: "6. 語の識別 (variants)", link: "en/grammar/6-special" },
      { text: "7. 文 Construction", link: "en/grammar/7-construction" },
      { text: "8. 敬語 (honorifics)", link: "en/grammar/8-keigo" },
    ],
    Diagramming: [
      { text: "Basics", link: "en/basics" },
      { text: "Topics and は", link: "en/topics" },
    ],
    Afterword: [
      { text: "Learning resources", link: "en/tools" },
      { text: "About", link: "en/about" },
    ],
  },
};
