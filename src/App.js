import React from "react";
import { Button, Layout } from "antd";
const { Header, Footer, Content } = Layout;

export default () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
    >
      <Header
        style={{
          color: "white",
          textAlign: "center",
          width: "100%"
        }}
      >
        Travis CI Demo
      </Header>
      <Content
        style={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
        }}
      >
        <h1>this is a demo based on travis + antd + react + now.</h1>
      </Content>
      <Footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          width: "100%"
        }}
      >
        author: Peter Yuan
      </Footer>
    </div>
  );
};
