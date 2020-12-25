import React from "react";

const ButtonMemo = props => {
  console.log("Rendering Button Component");

  return <button onClick={props.handleClick}>{props.children}</button>;
};

export default React.memo(ButtonMemo);
