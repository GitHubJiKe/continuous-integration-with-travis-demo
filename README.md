# [Travis 持续集成 Demo](https://antd-demo.ypf9319.now.sh/)

- React
- antd
- parcel

## 分支策略

- **dev** 本地发开分支 -- | -- 执行`npm start`命令，本地运行项目
- **test** 线上测试分支 -- | -- 从该分支提交代码，自动触发 test 分支的打包发布
- **prod** 线上正式分支 -- | -- 从该分支提交代码，自动触发 prod 分支的打包发布

---

代码编写维护流程：

dev 分支开发测试，实现功能将代码提交至远端；

可以在远端提交**Pull Request** `dev --> test`;自动触发 test 分支的发布；

测试没问题，再提交**PR** `dev --> prod`;自动触发 prod 分支的发布。

## bug 修复

如果线上发现 bug,需要及时修复并发布上线，可以执行`git checkout -b [**hot-fix-branch-name**] --track origin/master`命令，

基于线上运行代码分支 master checkout 出一个快速修复 bug 的分支（分支名自定义）；

然后修复 bug 后提交代码，将本地的代码推向远端，并在远端创建一个新的修复分支；

然后在远端提交**PR** merge 代码到 master，自动执行发布流程。

## 本地代码同步

修复完线上 bug,需要把在新分支上改过的代码同步更新到本地最新的还在开发的 dev 分支上。有两种方式，一种是从远端提**PR**merge 到 dev 分支之后再从本地 pull;另外一种就是直接在本地执行`git checkout dev`、`git merge [**hot-fix-branch-name**] or git pull origin [**hot-fix-branch-name**]`.
