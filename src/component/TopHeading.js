import React from "react";
const TopHeading = (props) => {
  return (
    <div className="top-head">
      {props.type === "home"}
      {props.type === "entertainment"}
    </div>
  );
};

export default TopHeading;
