// const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
import NextI18Next from "next-i18next";

const nextI18next = new NextI18Next({
  fallbackLng: "en-US",
  defaultLanguage: "en-US",
  otherLanguages: ["ko-KR"]
});

export const { appWithTranslation, useTranslation, i18n } = nextI18next;

export default nextI18next;
