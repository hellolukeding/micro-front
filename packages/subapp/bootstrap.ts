import { registerMicroApps, start } from "qiankun";

export async function bootstrap() {
  await new Promise((resolve) =>
    setTimeout(() => {
      registerMicroApps([
        {
          name: "vueApp", // app name registered ,unique ,required
          entry: "//localhost:10002/login?redirect=%2F",
          container: "#vue", // string | HTMLElement ,required
          activeRule: "/login", // string | (location: Location) => boolean ,required,match the router
        },
      ]);
      resolve(true);
    }, 1000)
  );
  start();
}
