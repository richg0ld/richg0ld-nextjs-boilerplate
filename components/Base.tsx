import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import "./Base.style.scss";

const Base = props => {
  const { theme: _theme, children } = props;
  const { t } = useTranslation(["sample", "meta"]);
  const [something, setSomething] = useState("");
  const [theme, setTheme] = useState(_theme);
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

  const changeTheme = () => {};

  const title = props.title || t("meta:common.title");
  const description = props.description || t("meta:common.description");
  const keywords = props.keywords || t("meta:common.keywords");

  return (
    <div className={"base"}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <label id="chkBox">
        <input
          type="checkbox"
          name="theme"
          checked={theme === "dark"}
          onChange={changeTheme}
        />{" "}
        Dark
      </label>
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
      <Button>Bootstrap</Button>
      <form onSubmit={onSubmit}>
        <input
          className={"text"}
          value={something}
          onChange={onChange}
          placeholder={t("sample.enter_text")}
        />
      </form>
      <h1>{t("sample.hello_world")}</h1>
      {children}
    </div>
  );
};

export default Base;
