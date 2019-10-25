# [Travis 持续集成 Demo](https://antd-demo.ypf9319.now.sh/)

- React
- antd
- parcel

## 分支策略

- **dev** 本地发开分支 -- | -- 执行`npm start`命令，本地运行项目
- **test** 线上测试分支 -- | -- 从该分支提交代码，自动触发 test 分支的打包发布
- **prod** 线上正式分支 -- | -- 从该分支提交代码，自动触发 prod 分支的打包发布

----

代码编写维护流程：

dev分支开发测试，实现功能将代码提交至远端；

可以在远端提交**Pull Request** `dev --> test`;自动触发 test 分支的发布；

测试没问题，再提交**PR** `dev --> prod`;自动触发 prod 分支的发布。


