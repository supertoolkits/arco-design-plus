import React from 'react';
import { createRoot } from 'react-dom/client';
import "@arco-design/web-react/dist/css/arco.css";
import App from "./app";


let mountNode: any = document.getElementById("root");
const root = createRoot(mountNode);

root.render(
    <App />
);
