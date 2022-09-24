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

        <Layout style={{padding: '0 20px', background: 'rgba(0, 0, 0, 0.02)'}}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{
            background: '#fff', padding: '1rem', border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0 0 3px rgba(0, 0, 0, 0.03)',
            borderRadius: '5px'
          }}>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
