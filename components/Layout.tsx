import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useTranslation } from "react-i18next";
import "./Layout.style.scss";

const Layout = props => {
  const { title, description, keywords, children } = props;
  const { t } = useTranslation(["meta", "sample"]);
  const [something, setSomething] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    if (!something) return;

    return Router.push(
      {
        pathname: "/param",
        query: { something }
      },
      `/param/${something}`
    );
  };
  const onChange = e => {
    setSomething(e.target.value);
  };

  const _title = title || t("meta.title");
  const _description = description || t("meta.description");
  const _keywords = keywords || t("meta.keywords");

  return (
    <div className={"layout"}>
      <Head>
        <title>{_title}</title>
        <meta name="description" content={_description} />
        <meta name="keywords" content={_keywords} />
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={_description} />
      </Head>
      <nav>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/other">
            <a>other</a>
          </Link>
        </li>
        <li>
          <Link href="/path/depth">
            <a>depth</a>
          </Link>
        </li>
        <li>
          <a href="/etc/hello.html">hello</a>
        </li>
      </nav>
      <form onSubmit={onSubmit}>
        <input
          className={"text"}
          value={something}
          onChange={onChange}
          placeholder={t("sample:sample.enter_text")}
        />
      </form>
      <h1>{t("sample:sample.hello_world")}</h1>
      {children}
    </div>
  );
};

export default Layout;
