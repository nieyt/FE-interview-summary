## 对BFC的理解与应用
块级格式化上下文（Block Formatting Context）
以下方式会创建BFC：
- 根元素或包含根元素的元素
- 浮动元素
- 绝对定位元素（`position`的值为`absolute`或`fixed`）
- 行内块元素（`display`为`inline-block`）
- `display`值为`table\table-cell\table-caption\table-row`等
- `overflow`值不为`visible`的块元素
- 弹性元素
- 网格元素   
...  
https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context  
BFC的布局规则：  

应用：  

https://juejin.im/post/5909db2fda2f60005d2093db