import chalk from "chalk";
import {spawn} from "child_process";
import bootstrap from "./bootstrap/bootstrap.js";
import {DividedWorkSpace} from "./types/types.js";
/*--------------------------------------- run ------------------------------------------*/
async function run(workspace: DividedWorkSpace) {
  const runList = ["services", "libs", "mainapp", "subapps"];
  for (let i = 0;i < runList.length;i++) {
    const name = runList[i];
    const apps = workspace[name!]!;

    apps.forEach((app) => {
      const workspace = Object.keys(app)[0]!;
      console.log(workspace);
      const childProcess = spawn("yarn", ["workspace", workspace, "start"], {
        stdio: ["inherit", "pipe", "pipe"],
        cwd: process.cwd()
      });

      childProcess.stdout.on('data', data => {
        console.log(chalk.bgCyanBright.greenBright(`🎉  ------------------子进程 ${workspace}  `));

        console.log(chalk.green(`子进程 ${workspace} 输出: \n${data}`));
      });

      childProcess.stderr.on('data', data => {
        console.log(chalk.bgCyanBright.greenBright(`👀  ------------------子进程 ${workspace}  `));
        console.log(chalk.cyanBright(`子进程 ${workspace} 输出: \n${data}`));

      });

      childProcess.on('exit', (code, signal) => {
        console.log(chalk.yellowBright(`✋  ------------------子进程 ${workspace}  `));
        if (code === 0) {
          console.log(`子进程 ${workspace}  退出成功！`);
        } else {
          console.log(chalk.redBright(`子进程 ${workspace}  异常退出，退出码${code}，请查看控制台输出情况！`));
        }
      });
    });
  }
}

async function start() {
  const info = await bootstrap();
  run(info)
}

start();