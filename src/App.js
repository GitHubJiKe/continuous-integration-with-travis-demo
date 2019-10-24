import React from "react";
import { Button } from "antd";

export default () => {
  const onClick = () => {
    alert("fuck you");
  };
  return <Button onClick={onClick}>Antd Button</Button>;
};
