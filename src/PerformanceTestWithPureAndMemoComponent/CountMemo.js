import React from "react";

const CountMemo = ({ count, title, children }) => {
  console.log("Rendering Count Component");
  let showTitle = title != "" ? title : "";
  return (
    <div>
      {children} : {count}
    </div>
  );
};

export default React.memo(CountMemo);
