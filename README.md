# sankey
饼图组件，包括选中效果、文字说明等常见的饼图。

<p align='center'><img width='400' src='./view.png'></p>

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@clunch/sankey"><img src="https://img.shields.io/npm/dm/@clunch/sankey.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@clunch/sankey"><img src="https://img.shields.io/npm/v/@clunch/sankey.svg" alt="Version"></a>
  <a href="https://github.com/clunch-contrib/sankey/graphs/commit-activity" target='_blank'><img alt="GitHub repo commit" src="https://img.shields.io/github/last-commit/clunch-contrib/sankey"></a>
  <a href="https://github.com/clunch-contrib/sankey/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@clunch/sankey.svg" alt="License"></a>
  <a href="https://github.com/clunch-contrib/sankey" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/clunch-contrib/sankey?style=social"></a>
</p>

## 如何使用？

首先，需要安装npm包（目前我们仅支持npm方式管理）：

```
npm install --save clunch @clunch/sankey
```

然后注册组件：

```js
import Clunch from 'clunch';
import sankey from '@clunch/sankey';

Clunch.series('ui-sankey',sankey);
```

然后，你就可以使用这个组件了：

```html
<ui-sankey data='Array' />
```

- data:数据，应该是一个数组（比如：```  ```）

除了上面的必输项外，还有下列可选项：

|属性|类型|描述|默认值|可选值|
|----|----|----|----|----|

由于此组件是基于[Clunch](https://github.com/hai2007/clunch)开发的，我们默认你已经掌握了相关知识。

[<< 你可以点击此处学习Clunch.js如何使用](https://hai2007.gitee.io/clunch/#/course/introduce?fixed=top)


开源协议
---------------------------------------
[MIT](https://github.com/clunch-contrib/sankey/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
