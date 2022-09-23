import React, {useState} from "react";
import {Breadcrumb, Layout} from '@arco-design/web-react';
import {IconCaretLeft, IconCaretRight, IconMenuFold, IconMenuUnfold} from "@arco-design/web-react/icon";
import TopHeader from "./components/TopHeader";
import Aside from "./components/Aside";
import styled from "@emotion/styled";
const Sider = Layout.Sider;
const Footer = Layout.Footer;
const Content = Layout.Content;


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
  // 位置
  position: absolute;
  bottom: 12px;
  right: 12px;
  &:hover {
    background-color: var(--color-fill-3);
  }
`;


export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopHeader />
      <Layout>
        <Sider
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          collapsible
          trigger={null}
          breakpoint='xl'
        >
          <Aside />
          <CollapseButton onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
          </CollapseButton>
        </Sider>

        <Layout style={{padding: '0 20px'}}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
