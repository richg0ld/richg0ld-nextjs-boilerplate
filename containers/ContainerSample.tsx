import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_SAMPLE, getSample } from "../modules/sample";
import "./ContainerSample.style.scss";

const ContainerSample = () => {
  const sample = useSelector(state => state.sample, []);
  const loading = useSelector(state => state.loading, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSample());
  }, []);

  const onSampleApiRequest = () => {
    dispatch(getSample());
  };

  return (
    <div className="container-sample">
      <div className="container-sample__postcss">
        Postcss autoprefixer, postcss-css-variables test
      </div>
      <div>
        <button
          className="container-sample__button"
          type={"button"}
          onClick={onSampleApiRequest}
        >
          Click!
        </button>
      </div>
      {loading[GET_SAMPLE]
        ? `loading...`
        : `data: ${JSON.stringify(sample.data)}`}
    </div>
  );
};

export default ContainerSample;
