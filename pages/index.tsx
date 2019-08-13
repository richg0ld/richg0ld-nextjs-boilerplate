import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { getSample, GET_SAMPLE } from "../modules/sample";
import { useTranslation } from "../i18n";

const Index = () => {
  const { t } = useTranslation("sample");
  const sample = useSelector(state => state.sample, []);
  const loading = useSelector(state => state.loading, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSample());
  }, []);

  const title = t("meta:meta.title");
  const description = t("meta:meta.description");
  const keywords = t("meta:meta.keywords");

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="test">
        Postcss autoprefixer, postcss-css-variables test
      </div>
      <h2>Index Page</h2>
      <div>.env : {process.env.API_URL}</div>
      <div>with translation : {t("sample.hello_world")}</div>
      <div>
        <img src="/static/images/gold-coin.jpg" alt="gold coin" />
      </div>
      <h2>Sample Api</h2>
      <div>
        <strong>Status code</strong> : {sample.status}
      </div>
      <div>
        <strong>Loading</strong> : {JSON.stringify(loading[GET_SAMPLE])}
      </div>
      <div>
        <strong>Data</strong> : {JSON.stringify(sample.data)}
      </div>
    </div>
  );
};

export default Index;
