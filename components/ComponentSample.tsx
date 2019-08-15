import React from "react";
import "./ComponentSample.style.scss";

const Sample = props => {
  const { txt } = props;
  return <div className={"sample"}>{txt}</div>;
};

export default Sample;
