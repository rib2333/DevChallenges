#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd build
git init
git config --local user.name "luzilin"
git config --local user.email "744883907@qq.com"
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:rib2333/DevChallenges.git master:button-component

cd -