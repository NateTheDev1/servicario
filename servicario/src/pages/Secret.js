import React from "react";
import withAuthorization from "../components/hoc/withAuthorization";

const Secret = () => {
  return <h1>I am Secret Page, only Auth USER can see me</h1>;
};

export default withAuthorization(Secret);
