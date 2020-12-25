import React from "react";

const TitleMemo = props => {
  console.log("Rendering Title Component");
  return <h2>{props.title}</h2>;
};

export default React.memo(TitleMemo);
