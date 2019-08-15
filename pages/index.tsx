import React from "react";
import { useTranslation } from "../i18n";
import Base from "../components/Base";
import ContainerSample from "../containers/ContainerSample";

const Index = props => {
  const { t } = useTranslation(["sample", "meta"]);

  const title = t("meta:index.title");
  const description = t("meta:index.description");
  const keywords = t("meta:index.keywords");

  return (
    <Base
      {...props}
      title={title}
      description={description}
      keywords={keywords}
    >
      <h2>Index Page</h2>
      <div>with translation : {t("sample.hello_world")}</div>
      <div>
        <img src="/static/images/gold-coin.jpg" alt="gold coin" />
      </div>
      <ContainerSample />
    </Base>
  );
};

export default Index;
