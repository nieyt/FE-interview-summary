## 对闭包的理解、闭包的使用场景  
闭包是函数和声明该函数的词法环境的组合。闭包通常用来创建内部变量，使得这些变量不能被外部随意修改，同时又可以通过指定的函数接口来操作。(模拟私有变量、函数柯里化、for循环内部赋值等)

## 继承的实现  
要点：call构造器继承，Object.create()原型继承，记得把子类的构造函数重新指向子类  
https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance

## new做了什么
当代码 new Foo(...) 执行时，会发生以下事情：
* 一个继承自 Foo.prototype 的新对象被创建。
* 使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。（包含将Foo的prototype赋值给该对象的__proto__）
* 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

## 如何判断一个对象是否是函数  
* typeof theObj === "function"
* theObj instanceof Function 
* obj.prototype !== undefined
* Object.prototype.toString.call(theObj) === "[object Function]"

## prototype和__proto__的区别  
* 对象有属性__proto__,指向该对象的构造函数的原型对象。
* 方法除了有属性__proto__,还有属性prototype，prototype指向该方法的原型对象。  
![珍藏多年的网图](./img/proto.jpg)

## Promise的reject函数和catch内的传参有什么区别 
reject函数将Promise状态从`pending`变为`rejected`，捕捉executor函数内部的错误；catch内的函数不仅可捕捉executor函数内部的错误，还可捕捉then内的resolve和reject函数内部发生的错误

## 什么是事件循环、宏任务微任务？
每一个函数执行的时候，都会生成新的execution context（执行上下文），执行上下文会包含一些当前函数的参数、局部变量之类的信息，它会被推入栈中， running execution context（正在执行的上下文）始终处于栈的顶部。当函数执行完后，它的执行上下文会从栈弹出。
事件循环：
* 函数入栈，当Stack中执行到异步任务的时候，就将他丢给WebAPIs,接着执行同步任务,直到Stack为空;
* 在此期间WebAPIs完成这个事件，把回调函数放入CallbackQueue中等待;
* 当执行栈为空时，Event Loop把Callback Queue中的一个任务放入Stack中,回到第1步。  
每一次执行栈清空先清空微任务，然后从event loop中取出宏任务推入栈中执行作为下一个循环。  
https://juejin.im/post/5afbc62151882542af04112d

## 对模块化的理解
commonJS(同步)->AMD(提前执行，推崇依赖前置)->CDM(延迟执行，推崇依赖就近)->ES6模块化(编译时就能确定模块的依赖关系，以及输入和输出的变量)  
http://xieyufei.com/2017/02/19/JS-Standard.html

## commonJs和es6的模块化方案有什么不同
https://www.cnblogs.com/cag2050/p/7419258.html

## 移动端fastClick事件的作用
FastClick 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。  
https://www.jianshu.com/p/6e2b68a93c88

## ajax和fetch的区别
* fetch基于Promise，写法优雅
* fetch默认不会带cookie，需要设置 fetch(url, {credentials: 'include'})
* fetch不能中断，没有 abort、terminate、onTimeout 或 cancel 方法  
https://github.com/camsong/blog/issues/2

## 怎么中止一个ajax请求
XMLHttpRequest.abort()  
https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest

## WebSocket建立连接的步骤（握手过程）
> 客户端发送get请求，请求头与传统http不同的地方关键点为：
```
Upgrade: websocket
Connection: Upgrade
```
表示发起的是Websocket协议。
> 其他还有：
```
Sec-WebSocket-Key: sN9cRrP/n9NdMgdcy2VJFQ==
Sec-WebSocket-Version: 13
```
Sec-WebSocket-Key 是由浏览器随机生成的，提供基本的防护，防止恶意或者无意的连接。
Sec-WebSocket-Version 表示 WebSocket 的版本。
> 服务器端响应报文Header
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```
一行行解释：
首先，101 状态码表示服务器已经理解了客户端的请求，并将通过 Upgrade 消息头通知客户端采用不同的协议来完成这个请求；
然后，Sec-WebSocket-Accept 这个则是经过服务器确认，并且加密过后的 Sec-WebSocket-Key；
最后，Sec-WebSocket-Protocol 则是表示最终使用的协议。
> Sec-WebSocket-Accept 的计算方法：
将 Sec-WebSocket-Key 跟 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 拼接；
通过 SHA1 计算出摘要，并转成 base64 字符串。

## es6中的Proxy是做什么的
Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）
作用： 
* 当对象中不存在属性名时，缺省返回数为固定值。
* 验证一个对象的传值  
...  
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

## 什么是事件冒泡？所有事件都可以冒泡吗？
DOM事件流：https://nieyt.github.io/2016/12/08/the-third-parameter-of-addEventListener/  
不是所有事件都可以冒泡：focus、blur、load等不会冒泡