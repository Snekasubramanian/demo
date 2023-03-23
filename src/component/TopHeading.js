import React from "react";
const TopHeading = (props) => {
  return (
    <div className="top-head">
      {props.type === "home"}
      {props.type === "entertainment"}
      {props.type === "talenthub"}
      {props.type === "talentregister"}
    </div>
  );
};

export default TopHeading;
