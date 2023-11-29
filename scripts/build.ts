import {spawn} from "child_process";
import bootstrap from "./bootstrap/bootstrap.js";
import {DividedWorkSpace} from "./types/types.js";


async function run(workspace: DividedWorkSpace) {
  const runList = ["services", "libs", "mainapp", "subapps"];
  for (let i = 0;i < runList.length;i++) {
    const name = runList[i]!;
    const apps = workspace[name]!;

    apps.forEach((app) => {
      const workspace = Object.keys(app)[0]!;
      console.log(workspace);
      const childProcess = spawn("yarn", ["workspace", workspace, "build"], {
        stdio: ["inherit", "pipe", "pipe"],
        cwd: process.cwd()
      });

      childProcess.stdout.on('data', data => {
        console.log(`🎉  ------------------子进程 ${workspace}  `);

        console.log(`子进程 ${workspace} 输出: \n${data}`);
      });

      // 监听子进程的错误流
      childProcess.stderr.on('data', data => {
        console.log(`👀  ------------------子进程 ${workspace}  `);

        console.error(`子进程 ${workspace} 输出: \n${data}`);
      });

      // 监听子进程的退出事件
      childProcess.on('exit', (code, signal) => {
        console.log(`✋  ------------------子进程 ${workspace}  `);

        console.log(`子进程 ${workspace}  退出，退出码: ${code}`);
      });
    });
  }
}

async function build() {
  const info = await bootstrap();
  run(info)
}

build();