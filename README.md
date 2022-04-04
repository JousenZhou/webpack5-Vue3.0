;```
# 安装依赖
npm install

# 进入开发
npm start

# 打包
npm run build

# git commit
npm run commit
```

webstorm 配置
1. file-setting 搜索 webpack 选择build/webpack.base.js
2. file-setting 搜索 stylelint 启动
3. file-setting-Tools - External  添加 
    name ： stylelint-fix
    description: stylelint-fix
    programs: (目录)\stylelint.cmd
    arguments:$FileName$ --fix
    working directory $FileDir$    
4. file-setting-Keymap External-Tools 选择styleint-fix 右键添加映射