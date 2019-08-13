import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import "./Layout.style.scss";

const Layout = props => {
  const { theme: _theme, children } = props;
  const { t } = useTranslation(["sample"]);
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

  return (
    <div className={"layout"}>
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

export default Layout;
