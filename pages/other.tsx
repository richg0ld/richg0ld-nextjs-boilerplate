import React from "react";
import { useSelector } from "react-redux";
import { getSample } from "../modules/sample";
import _ from "lodash";

const Other = () => {
  const sample = useSelector(state => state.sample, []);

  return (
    <div>
      <h2>Other Page</h2>
      <div className="trans-content">{"sample.boilerplate"}</div>
      <div className="theme-color-comp">1234567890</div>
      <div>
        <strong>Data</strong> : {JSON.stringify(sample.data)}
      </div>
      {/*language=SCSS*/}
      <style jsx>{`
        .trans-content {
          color: yellow;
        }
      `}</style>
    </div>
  );
};

Other.getInitialProps = async ({ store }) => {
  if (_.isEmpty(store.getState().sample.data)) {
    await store.dispatch(getSample());
  }
};

export default Other;
