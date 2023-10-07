# yarn-worspace 最佳实践

## 说明

> 先安装[volta](https://volta.sh/)
> 在此目录执行`yarn - v`
> 在此目录执行`node -v`

## 目录结构

> |\_libs 组件库
> |\_packages 微前端主应用和子应用
> |\_services 通用库 如通用请求库等

## monorepo

> 什么是 monorepo
> Monorepo 是指将多个项目或组件库放在同一个代码仓库中进行管理的开发模式。这种模式可以让开发者更方便地共享代码、管理依赖、进行版本控制等，同时也可以减少代码重复和维护成本。Monorepo 通常使用工具来管理多个项目或组件库之间的依赖关系，大型项目中如果想复用某一个模块往往很难频繁的在 npm 上维护一个通用包（往往意味着大量的修改和更新，且同时要求符合业务与通用性），因此需要 monorepo，monorepo 本质上是通过软连接（符号链接）整合多个子包构建的项目整体。

## yarn workspace

yarn workspace 是 Yarn 包管理器提供的一个命令，用于在 monorepo 中管理工作区（workspace）之间的依赖关系。通过 yarn workspace 命令，你可以在 monorepo 中执行以下操作：

- 安装依赖：在指定的工作区中安装依赖。
- 运行脚本：在指定的工作区中运行脚本。
- 构建项目：在指定的工作区中构建项目。
- 等等。

## 常用命令

### 针对单一 workspace

```bash
yarn workspace <workspace_name> <command>
```

> 作用: 在指定的 workspace 下执行 command，即 command 作用域为某个 workspace。示例：
>
> ```bash
> # 为app1安装react
> yarn workspace app1 add react --save
>
> # 执行app1中的start脚本
> yarn workspace app1 run start
> ```

### 针对全局

```bash
# 递归查看所有包
yarn workspaces list -R --json
# 递归查看所有包详情
yarn workspaces list --since -R -v  --json
```

![](https://cdn.ipfsscan.io/ipfs/Qma17sWf6EmSGne1vmzi6mhcmArY4GhSFYa1C68RMvBLt1?filename=image.png)

> 作用： 递归查看当前 workspace 所有的包，通过 json 方式

### 需要安装 workspace-tools 插件：`yarn plugin import workspace-tools`

```bash
yarn workspaces foreach <commandName> ...
```

> 作用：如何遍历工作区。
> 以下是 yarn workspaces foreach 命令的常用选项：
>
> - --all：遍历所有工作区，包括未被依赖的工作区。
> - --recursive：递归遍历所有依赖的工作区。
> - --since：只遍历自上次提交以来发生更改的工作区。
> - --worktree：只遍历当前工作树中的工作区。
>   示例：

```bash
#安装依赖
yarn workspaces foreach --all run yarn install
#发布当前包和所有后代包：
yarn workspaces foreach npm publish --tolerate-republish
#在当前包和所有后代包上运行构建脚本
yarn workspaces foreach run build
#在当前包和所有后代包上并行运行构建脚本，首先构建包依赖项：
yarn workspaces foreach -pt run build
#在多个包及其所有依赖项上运行构建脚本，首先构建依赖项：
yarn workspaces foreach -ptR --from '{workspace-a,workspace-b}' run build
```

![](https://cdn.ipfsscan.io/ipfs/QmNTRAUdS2Muub6Aqqh91yVQgQfQVr1dqiSRq48YdorqXE?filename=image.png)

此命令将在当前及其所有后代工作空间上运行给定的子命令。各种标志可以改变命令的确切行为：

> 如果-p,--parallel 设置，命令将并行运行；默认情况下，它们将被限制为大约等于核心数量一半的并行任务数量，但可以通过 覆盖-j,--jobs，或通过设置 禁用-j unlimited。
>
> 如果-p,--parallel 和-i,--interlaced 都设置了，Yarn 将在收到输出时打印这些行。如果-i,--interlaced 未设置，它将缓冲每个进程的输出，并仅在其源进程退出后才打印结果缓冲区。
>
> 如果-t,--topological 设置，Yarn 将仅在它通过该字段依赖的所有工作区 dependencies 成功完成执行后运行该命令。如果--topological-dev 设置，则 在计算等待点时将考虑 dependencies 和字段。devDependencies
>
> 如果-A,--all 设置，Yarn 将在项目的所有工作区上运行该命令。默认情况下，yarn 仅在当前及其所有后代工作空间上运行该命令。
>
> 如果设置了，Yarn 将通过递归评估和字段-R,--recursive 来查找运行命令的工作区，而不是查看字段。dependenciesdevDependenciesworkspaces
>
> 如果--from 设置了，Yarn 将使用与“from”全局匹配的包作为任何递归搜索的起点。
>
> 如果--since 设置，Yarn 将仅在自指定引用以来已修改的工作区上运行该命令。默认情况下，Yarn 将使用配置选项指定的引用 changesetBaseRefs。
>
> 该命令可能仅适用于某些工作区，通过使用--include 它充当白名单。该--exclude 标志将执行相反的操作，并且将是不得执行脚本的包列表。两个标志都接受 glob 模式（如果 Idents 有效并且受 micromatch 支持）。确保转义这些模式，以防止您自己的 shell 尝试扩展它们。
>
> 添加该-v,--verbose 标志（在交互式终端环境中自动启用）将导致 Yarn 打印更多信息；特别是生成输出的工作空间的名称将打印在每行的前面。
>
> 如果该命令是 run 并且正在运行的脚本不存在，则将跳过子工作区，而不会出现错误。

## 规范

> 1.  yarn workspace link 的 Packages 设置为私有
>     在需要本地依赖的组件的`package.json`中设置`private：true`，目的是防止其被误上传至 npm 远程仓库。强制限定只能通过本地源码 link 的方式引用，这样就可以有效避免问题 4。
> 2.  所有 workspace 的依赖声明收敛到 workspace-root 中
>     即各个 workspace 的 pakcage.json 中不再声明 dependencies、devDependencies，依赖的注册全部收敛到 workspace-root 的 package.json 中。  
>     对于新的项目可以在一开始就只使用`yarn -W add [package] [--dev]`进行安装，对于历史项目可以手工修改各 workspace 的 package.json，将依赖剪切到根目录的 package.json 里。  
>     这样做的好处是统一各个子 workspace 的依赖版本，避免同一依赖安装不同版本，保持整个 worktree 下项目里依赖版本的统一，并在各 workspace 间共享依赖。  
>     对于全局共享依赖带来的项目初始化安装时间的增加，是可以接受的，因为只是首次安装耗时长而已，后续因为有缓存，安装时间将大大缩减。
> 3.  禁止 workspace 独立新增依赖
>     所有新增的依赖需要通过`yarn -W add [package] [--dev]`进行安装，这一条可以认识是对第二条规范的补充。
> 4.  `yarn.lock`必须提交，冲突必须解决
>     yarn.lock 是 yarn 依赖版本控制的基础，在全局共享依赖的框架下，yarn.lock 文件的维护变得尤其重要。保证提交是为了确保新增依赖能够纳入到 yarn 版本管控中，正确解决冲突则是确保依赖版本的唯一性、统一性。
> 5.  在 Yarn Workspace 跟目录中添加 eslint、prettier 配置，各子 workspace 继承 root 的配置
>     eslint 和 prettier 配置已经成为规范项目代码的标配，既然是配置当然要在整个 Workspace 范围内保持统一。
> 6.  日常开发应当在 workspace-root 目录下
>     这是对规范 5 补充，确保全局代码规范能够生效；  
>     也能让开发者方便查看 yarn workspace link 的 Packages

# 本地通用库开发

> 本地通用库开发采取`tsdx`开发
> ![](https://cdn.ipfsscan.io/ipfs/QmTKox7nq3iR2yd4srJmXdEDQCgv6MTiwARSVsTceCnRGk?filename=image.png) > ![](https://cdn.ipfsscan.io/ipfs/QmRsUqxzYydwZ1haCJtEP64n2zMUJe947LeNRDUfZ5eLFY?filename=image.png)

## 引入

```bash
# 方式1
yarn workspace [workspace名称] add [包名@具体版本号]
# 方式2
cd ./子项目内
yarn add [包名@具体版本号]
# e.g.
yarn workspace subapp add mylib@0.1.0
yarn workspace mainapp add myService@0.1.0
```
