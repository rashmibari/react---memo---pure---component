import React from "react";

const Count = ({ count, title, children }) => {
  console.log("Rendering Count Component");
  let showTitle = title != "" ? title : "";
  return (
    <div>
      {children} : {count}
    </div>
  );
};

export default Count;
