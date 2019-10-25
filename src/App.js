import React, { useState } from "react";
import { Layout, Button, Modal } from "antd";
const { Header, Footer, Content } = Layout;
const NODE_ENV = process.env.NODE_ENV;

function getWelcomeText() {
  switch (NODE_ENV) {
    case "dev":
      return "Development World";
    case "test":
      return "Test World";
    case "production":
      return "Production World";

    default:
      return "World";
  }
}

export default () => {
  console.log("====================================");
  console.log("打印Travis CI配置的环境变量： ", NODE_ENV);
  console.log("====================================");
  const [show, setShow] = useState(false);

  const onModalShow = () => setShow(true);

  const onModalHide = () => setShow(false);
  
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
        <Button onClick={onModalShow}>show Modal</Button>
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
      <Modal
        closable
        maskClosable
        title="Hello"
        visible={show}
        onCancel={onModalHide}
        onOk={onModalHide}
      >
        <h1>Hello {getWelcomeText()}</h1>
      </Modal>
    </div>
  );
};
