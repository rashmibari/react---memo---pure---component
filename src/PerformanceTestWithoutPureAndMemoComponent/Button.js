import React from "react";

const Button = props => {
  console.log("Rendering Button Component");

  return <button onClick={props.handleClick}>{props.children}</button>;
};

export default Button;
