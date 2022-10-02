import React from 'react';
import { createRoot } from 'react-dom/client';
import "@arco-design/web-react/dist/css/arco.css";
import App from "./app";
import { ConfigProvider } from '@arco-design/web-react';
import enUS from '@arco-design/web-react/es/locale/en-US';
import zhCn from '@arco-design/web-react/es/locale/zh-CN';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {EN_US, useAppConfigStore} from "./store/app.config.store";


let mountNode: any = document.getElementById("root");
const root = createRoot(mountNode);

const queryClient = new QueryClient();

function RootApp() {
  const appConfig = useAppConfigStore();

  return (
    <ConfigProvider locale={appConfig.locale === EN_US ? enUS: zhCn}>
      <App />
    </ConfigProvider>
  );
}

root.render(
  <QueryClientProvider client={queryClient}>
    <RootApp />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
