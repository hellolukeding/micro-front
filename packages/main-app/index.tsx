// index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { bootstrap } from "./bootstrap";
import App from "./src/App";

const root = ReactDOM.createRoot(document.getElementById("app")!);
// v18 的新方法
root.render(<App />);

bootstrap();
