import React from "react";

const Loader = ({ classes }) => {
  return (
    <div className={`loader-wrapper ${classes ? classes : ""}`}>
      <div>
        <div className="loader" />
        <h3>Loading</h3>
      </div>
    </div>
  );
};

export default Loader;
