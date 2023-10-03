import {addGlobalUncaughtErrorHandler, registerMicroApps, setDefaultMountApp, start} from "qiankun";

interface AppList {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
}

const subappList: AppList[] = [
  {
    name: "subapp", // app name registered ,unique ,required
    entry: "//localhost:8081",
    container: "#subapp", // string | HTMLElement ,required
    activeRule: "/sbapp", // string | (location: Location) => boolean ,required,match the router
  },
];
export async function bootstrap() {
  await new Promise((resolve) =>
    setTimeout(() => {
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
        },
      });
      resolve(true);
    }, 1000)
  );
  start({
    prefetch: true, // 开启预加载
    sandbox: {
      experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
    },
  });
  // 添加全局异常捕获
  addGlobalUncaughtErrorHandler((handler) => {
    console.log("异常捕获", handler);
  });
  setDefaultMountApp('/subapp');
}
