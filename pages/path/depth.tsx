import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSample } from "../../modules/sample";
import Base from "../../components/Base";
import ContainerSample from "../../containers/ContainerSample";

const Depth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSample());
  }, []);
  return (
    <Base>
      <h2>Depth Page</h2>
      <ContainerSample />
    </Base>
  );
};

export default Depth;
