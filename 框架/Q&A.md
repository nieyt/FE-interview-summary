## 开放

- react和vue的区别、异同点
- redux和vuex区别
- dva和react/redux项目的区别

## vue
- vue双向绑定原理
- dom diff和virtual dom原理
- vue生命周期
- vue-router原理
- vue优化
- computed计算值和method计算值有什么区别
- 怎么修改第三方插件的样式
- 怎么实现v-model绑定子组件属性更新
- 用vuex和用全局对象去更新数据的区别 
## react
- react生命周期
- react优化
- dva项目优点
- react-router原理
- dom diff和virtual dom原理
- redux工作流程
- redux的connect方法的实现原理
- redux的中间件是做什么的？原理？
- react项目中setState之后，组件做了什么？


vue双向绑定
Observe：递归遍历对象属性，在getter里添加订阅者，setter里添加发布者
Compile: 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
Watcher：作为Observe和Compile之间的通行桥梁，在自身实例化时网订阅器里添加自己，有一个update方法，待属性变动发起通知时，能调用自身的update方法，并触发compile中的回调
MVVM: 作为数据绑定的入口，通过Observer监听model数据变化，通过Complie来解析编译模板指令，通过Watcher搭起Observer和Compile之间的桥梁