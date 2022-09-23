import React from 'react';
import { createRoot } from 'react-dom/client';
import "@arco-design/web-react/dist/css/arco.css";
import App from "./app";
import { ConfigProvider } from '@arco-design/web-react';
import enUS from '@arco-design/web-react/es/locale/en-US';
import zhCn from '@arco-design/web-react/es/locale/zh-CN';


let mountNode: any = document.getElementById("root");
const root = createRoot(mountNode);

root.render(
  <ConfigProvider locale={enUS}>
    <App />
  </ConfigProvider>
);
