import {
  addGlobalUncaughtErrorHandler,
  registerMicroApps,
  runAfterFirstMounted,
  start
} from "qiankun";
import { loadScript } from "./src/utils/loadScripts";

interface AppList {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  props: {
    [key: string]: any;
  };
}

const subappList: AppList[] = [
  {
    name: "subapp", // app name registered ,unique ,required
    entry: "//localhost:8081",
    container: "#subapp", // string | HTMLElement ,required
    activeRule: "/subapp", // string | (location: Location) => boolean ,required,match the router
    props: {
      // container: "#subapp",
    }
  }
];
export function bootstrap() {
  //注册子应用
  registerMicroApps(subappList, {
    // qiankun 生命周期钩子 - 微应用加载前
    beforeLoad: (app: any) => {
      console.log("before load", app.name);
      return Promise.resolve();
    },
    // qiankun 生命周期钩子 - 微应用挂载后
    afterMount: (app: any) => {
      console.log("after mount", app.name);
      return Promise.resolve();
    }
  });
  // 添加全局异常捕获
  addGlobalUncaughtErrorHandler(event => console.log(event));
  // setDefaultMountApp('/subapp');

  runAfterFirstMounted(() => {
    console.log("[MainApp] first app mounted");
  });
  start({
    prefetch: true, // 开启预加载
    sandbox: {
      experimentalStyleIsolation: true //   开启沙箱模式,实验性方案
    },
    excludeAssetFilter: (assetUrl: string) => {
      console.log(assetUrl, "微应用资源不被qiankun劫持处理");
      return true;
    }, // 指定部分特殊的动态加载的微应用资源不被qiankun劫持处理
    //@ts-ignore
    fetch: async (url: RequestInfo | URL) => {
      console.log(url, "自定义fetch");
      const res = await fetch(url);
      const subfix = url
        .toString()
        .split("/")
        .pop();
      console.log(subfix, "subfix");
      if (subfix === "PopCity3D.js") {
        loadScript(url.toString());
        return new Response("", { status: 200 });
      }
      return res;
    }
  });
  // start();
  console.log("main-app bootstrap");
}
