// index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./src/App";
let root: ReactDOM.Root;

if (window.__POWERED_BY_QIANKUN__) {
  // 设置publicPath
  //@ts-ignore
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// 将render方法用函数包裹，供后续主应用与独立运行调用
function render(props: any) {
  const { container } = props;
  console.log("container", container);

  let dom: HTMLElement;
  if (container) {
    dom = container.querySelector("#root") as HTMLElement;
  } else {
    dom = document.getElementById("root") as HTMLElement;
  }
  console.log("dom", dom);
  root = ReactDOM.createRoot(dom as HTMLElement);
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/subapp" : "/"}>
      <App />
    </BrowserRouter>
  );
}

// 判断是否在qiankun环境下，非qiankun环境下独立运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

// 子应用的入口main.js

// ..其他代码

// 子应用加载时候的各个生命周期
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重
export async function bootstrap() {
  console.log("react app bootstraped");
}

// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props: any) {
  console.log("react app mount", props);
  render(props);
}

// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount(props: any) {
  console.log("react app unmount", props);
  root.unmount();
}

//
export async function update() {
  // 更新微应用
}
