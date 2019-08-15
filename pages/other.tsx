import React, { useEffect } from "react";
import { getSample } from "../modules/sample";
import _ from "lodash";
import ContainerSample from "../containers/ContainerSample";
import Base from "../components/Base";

const Other = props => {
  return (
    <Base {...props}>
      <h2>Other Page</h2>
      <div className="other">{"sample.boilerplate"}</div>
      <div className="theme-color-comp">1234567890</div>
      <ContainerSample />
    </Base>
  );
};

Other.getInitialProps = async ({ store }) => {
  if (_.isEmpty(store.getState().sample.data)) {
    await store.dispatch(getSample());
  }
};

export default Other;
