// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
import NextI18Next from "next-i18next";

const nextI18next = new NextI18Next({
  lng: "en",
  fallbackLng: "en_US",
  defaultLanguage: "en_US",
  otherLanguages: ["ko_KR"]
  // localeSubpaths
});

export const { appWithTranslation, useTranslation } = nextI18next;

export default nextI18next;
