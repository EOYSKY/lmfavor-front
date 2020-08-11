#!/usr/bin/env bash
echo "开始更新项目..."

date=$(date)
# git submodule foreach git pull origin master
git pull
git add -A
git commit -m "${message}${USER} 更新于 ${date}."
git push -u origin ZXY20200811

echo "更新并推送成功！"
exit 0;
