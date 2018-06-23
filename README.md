# Git 演示项目
2018年6月22日

- git init                        //初始化仓库
- git add  <filename>                    //添加文件到暂存区
- git add .                                       //添加所有文件
-  git config --global user.name <username>
-  git config --global user.email < <example@xxx.com>>
- git commit -m '提交的原因'        //提交文件
-  git log                                           //查看日志
- git reset --hard HEAD^              //返回到当前版本的前一个版本
-  git reset --hard 编号的前六位    //同上
-  git checkout --                                  //把暂存区的文件取回来
-  git rm <filename>                        //删除文件





网络命令：

- git remote add origin https://github.com/yiran111/code.git      //远端仓库绑定，远端仓库的名字是origin
- git push -u origin master            //将本地代码同步到服务器
- git pull                        //将服务器的代码同步到本地
-  git clone url        //将服务器的内容克隆到本地



