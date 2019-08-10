import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSample } from "../modules/sample";

const Other = () => {
  const sample = useSelector(state => state.sample, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSample());
  }, []);

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

export default Other;
