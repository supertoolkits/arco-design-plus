import React, {useState} from "react";
import {Breadcrumb, Layout} from '@arco-design/web-react';
import { IconCaretLeft, IconCaretRight} from "@arco-design/web-react/icon";
import TopHeader from "./components/TopHeader";
import Aside from "./components/Aside";
const Sider = Layout.Sider;
const Footer = Layout.Footer;
const Content = Layout.Content;


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
          trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
          breakpoint='xl'
        >
          <Aside />
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
