import {exec} from 'child_process';
import {DividedWorkSpace, getWorkSpacePromiseResult} from "../types/types.js";
// 获取所有的workspace
const getWorkSpacePromise = (): Promise<getWorkSpacePromiseResult> => {
  return new Promise((resolve, reject) => {
    exec("yarn workspaces info --json", (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        reject(err);
      }

      try {
        // 将Buffer转换为字符串
        const stdoutStr = stdout.toString();
        // 将字符串按行分割
        const lines = stdoutStr.split('\n').filter((line) => line !== '').join("");
        const info = JSON.parse(lines);
        resolve(info);
      } catch (error) {
        throw new Error(error as string);
      }
    });
  });
}


const bootstrap = async (): Promise<DividedWorkSpace> => {
  const info = await getWorkSpacePromise();
  const services: getWorkSpacePromiseResult[] = [];
  const libs: getWorkSpacePromiseResult[] = [];
  const mainapp: getWorkSpacePromiseResult[] = [];
  const subapps: getWorkSpacePromiseResult[] = [];
  Object.keys(info).forEach((key) => {
    const item = info[key]!;
    if (item.location.includes("services")) {
      services.push({[key]: item});
    } else if (item.location.includes("libs")) {
      libs.push({[key]: item});
    } else if (item.location.includes("main-app")) {
      mainapp.push({[key]: item});
    } else {
      subapps.push({[key]: item});
    }
  });
  return {
    services: services,
    libs: libs,
    mainapp: mainapp,
    subapps: subapps
  }
};

export default bootstrap;

