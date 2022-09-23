import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";

function App() {
  return (
    <div>
      <Button type="primary">Hello Arco</Button>
    </div>
  );
}

let mountNode: any = document.getElementById("root");
const root = createRoot(mountNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
