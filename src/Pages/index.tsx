import React from "react";
import Routes from "../Routes/Routes";

export { default as Dashboard } from "./Dashboard";
export { default as Tracker } from "./Tracker";
export { default as Axies } from "./Axies";

const Pages = () => {
  return <Routes />;
};

export default Pages;
