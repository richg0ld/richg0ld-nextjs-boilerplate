import React from "react";

const Depth = () => {
  return (
    <div>
      <h2>Other Page</h2>
      <div className="trans-content">{"sample.boilerplate"}</div>
      <div className="theme-color-comp">1234567890</div>
      {/*language=SCSS*/}
      <style jsx>{`
        .trans-content {
          color: yellow;
        }
      `}</style>
    </div>
  );
};

export default Depth;
