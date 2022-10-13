import React, { ReactElement } from "react";
import { Breadcrumb, Layout } from "@arco-design/web-react";
const Content = Layout.Content;

export default function DashboardPage(): ReactElement {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          background: "#fff",
          padding: "1rem",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          boxShadow: "0 0 3px rgba(0, 0, 0, 0.03)",
          borderRadius: "5px",
        }}
      >
        Content
      </Content>
    </>
  );
}
