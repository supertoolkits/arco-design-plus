import React from "react";
import { createRoot } from "react-dom/client";
import "@arco-design/web-react/dist/css/arco.css";
import { ConfigProvider } from "@arco-design/web-react";
import enUS from "@arco-design/web-react/es/locale/en-US";
import zhCn from "@arco-design/web-react/es/locale/zh-CN";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { EN_US, useAppConfigStore } from "./store/app.config.store";
import MainRouters from "./routers";

const mountNode = document.getElementById("root") as HTMLElement;
const root = createRoot(mountNode);

const queryClient = new QueryClient();

function RootApp() {
  const appConfig = useAppConfigStore();

  return (
    <ConfigProvider locale={appConfig.locale === EN_US ? enUS : zhCn}>
      <MainRouters />
    </ConfigProvider>
  );
}

root.render(
  <QueryClientProvider client={queryClient}>
    <RootApp />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);


if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered.');
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
