import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";
import { useTranslation } from "react-i18next";
import { FormCheck, FormControl, InputGroup, Nav } from "react-bootstrap";
import "./Base.style.scss";
import SelectLanguage from "./SelectLanguage";

const Base = props => {
  const { theme: _theme, children } = props;
  console.log("_theme", _theme);
  const router = useRouter();
  const { t } = useTranslation(["sample", "meta"]);
  const [param, setParam] = useState("");
  const [pizza, setPizza] = useState("");
  const [theme, setTheme] = useState(_theme);
  const onSubmitParam = e => {
    e.preventDefault();
    if (!param) return;

    return Router.push(
      {
        pathname: "/path/p/[param]",
        query: { param }
      },
      `/path/p/${param}`
    );
  };
  const onSubmitPizza = e => {
    e.preventDefault();
    if (!pizza) return;

    return Router.push(
      {
        pathname: "/path/[dynamic]/pizza",
        query: { dynamic: pizza }
      },
      `/path/${pizza}/pizza`
    );
  };
  const onChangeParam = e => {
    setParam(e.target.value);
  };
  const onChangePizza = e => {
    setPizza(e.target.value);
  };

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
      <SelectLanguage />
      <InputGroup>
        <label htmlFor="dark">
          <InputGroup.Checkbox
            name="theme"
            id="dark"
            checked={theme === "dark"}
            onChange={changeTheme}
          />
          {theme}
        </label>
      </InputGroup>
      <Nav variant={"tabs"} defaultActiveKey={router.pathname}>
        <Nav.Item>
          <Link href="/" passHref>
            <Nav.Link>home</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/other" passHref>
            <Nav.Link>other</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/path/depth" passHref>
            <Nav.Link>depth</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/static/event/hello.html">hello</Nav.Link>
        </Nav.Item>
      </Nav>
      <form onSubmit={onSubmitParam}>
        <InputGroup>
          <FormControl
            value={param}
            onChange={onChangeParam}
            placeholder={t("sample.enter_text")}
          />
        </InputGroup>
      </form>
      <form onSubmit={onSubmitPizza}>
        <InputGroup>
          <FormControl
            value={pizza}
            onChange={onChangePizza}
            placeholder={t("common:q_pizza")}
          />
        </InputGroup>
      </form>
      <h1>{t("sample.hello_world")}</h1>
      {children}
    </div>
  );
};

export default Base;
