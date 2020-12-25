import React from "react";

const Title = props => {
  console.log("Rendering Title Component");
  return <h2>{props.title}</h2>;
};

export default Title;
