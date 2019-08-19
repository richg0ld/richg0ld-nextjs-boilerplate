import React from "react";
import { useTranslation, i18n } from "../i18n";
import { Dropdown } from "react-bootstrap";

const LANGUAGES = [
  {
    id: "ko-KR",
    title: "한국어"
  },
  {
    id: "en-US",
    title: "English"
  }
];

const SelectLanguage = () => {
  const { t } = useTranslation(["common"]);
  const onClick = language => () => {
    i18n.changeLanguage(language);
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {t("select_language")}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {LANGUAGES.map(language => (
          <Dropdown.Item key={language.id} onClick={onClick(language.id)}>
            {language.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SelectLanguage;
