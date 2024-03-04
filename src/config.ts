import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Beglerov Baurzhan",
  desc: "Baurzhan Beglerov's blog, where he shares his experience and knowledge in computer science, fullstack development, and other interesting topics.",
  title: "Baurzhan Beglerov",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/iowawthe3rd",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iowth3rd/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/baurzhan-beglerov-786a1b2b0",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/iowathe3rd",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
