import React from "react";
import "./style.css";

import ParentClassComponent from "./PerformanceTestWithoutPureAndMemoComponent/ParentClassComponent";

import ParentPureComponent from "./PerformanceTestWithPureAndMemoComponent/ParentPureComponent";

export default function App() {
  return (
    <div>
      <ParentClassComponent />
      <ParentPureComponent />
    </div>
  );
}
