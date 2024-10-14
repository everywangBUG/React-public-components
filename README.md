# 公共组件库编译
## css和js分开编译
* 注销Message、Watermark、Calendar中的scss文件
## 添加一个index.ts文件导出公共组件
*
```javascript
import Calendar, { CalendarProps } from './Calendar';
import Watermark, { WatermarkProps } from './Watermark';
import { MessageProps, Position, MessageRef} from './Message';
import { useMessage } from './Message/useMessage';
import { ConfigProvider } from './Message/ConfigProvider';

export {
    Calendar,
    Watermark,
    ConfigProvider,
    useMessage
}

export type {
    CalendarProps,
    WatermarkProps,
    MessageProps,
    Position,
    MessageRef
}
```
## tsc和sass编译
* 添加tsconfig.build.json配置文件
```javascript
{
    "compilerOptions": {
      "declaration": true,
      "allowSyntheticDefaultImports": true,
      "target": "es2015",
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "Node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "react-jsx",  
      "allowImportingTsExtensions":null,
      "strict": true,
    },
    "include": [
      "src"
    ],
    "exclude": [
      "src/**/*.test.tsx",
      "src/**/*.stories.tsx"
    ]
}
```
## 编译
### 编译cjs和esm
*
```javascript
npx tsc -p tsconfig.build.json --module ESNext --outDir dist/esm
npx tsc -p tsconfig.build.json --module commonjs --outDir dist/cjs
```
### 编译scss
*
```javascript
npx sass ./src/Message/MessageProvider.scss ./dist/esm/Message/MessageProvider.css
```
* 如果sass文件或者其他css文件过多，可使用node脚本自动查找然后编译

## 脚本设置
* main和module分别是commonjs和es module的入口
* types是ts声明文件
* files是哪些文件需要发布到npm仓库，没被列出的被过滤
```javascript
"main": "dist/cjs/index.js",
"module": "dist/esm/index.js",
"types": "dist/esm/index.d.ts",
"files": [
    "dist",
    "package.json",
    "README.md"
],
```
## npm adduser
* `npm login --auth-type=legacy`登录用户名和密码
* 登录成功后，执行`npm publish`