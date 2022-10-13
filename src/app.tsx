import React, { useState } from "react";
import { Layout } from "@arco-design/web-react";
import { IconMenuFold, IconMenuUnfold } from "@arco-design/web-react/icon";
import TopHeader from "./components/TopHeader";
import Aside from "./components/Aside";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
const Sider = Layout.Sider;
const Footer = Layout.Footer;

const CollapseButton = styled.div`
  height: 24px;
  width: 24px;
  background-color: var(--color-fill-1);
  color: var(--color-text-3);
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 12px;
  right: 12px;
  &:hover {
    background-color: var(--color-fill-3);
  }
`;

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <TopHeader />
      <Layout>
        <Sider
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          collapsible
          trigger={null}
          breakpoint="xl"
        >
          <Aside />
          <CollapseButton onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
          </CollapseButton>
        </Sider>

        <Layout
          style={{ padding: "0 20px", background: "rgba(0, 0, 0, 0.02)" }}
        >
          <Outlet />
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
