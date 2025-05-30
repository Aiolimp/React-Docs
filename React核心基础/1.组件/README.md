# 组件

### **什么是 React 组件？**

**React 组件**就是可以重复使用的小模块，用来组成页面的。

每个组件本质上就是一个 **函数**，返回一段 **JSX** 结构。

简单理解：

👉 **组件 = 函数 + 返回界面内容**

### **React 组件的分类**

| **类型**                      | **解释**                                      | **示例**                                     |
| ----------------------------- | --------------------------------------------- | -------------------------------------------- |
| 函数组件 (Function Component) | 用函数来定义组件，简单、推荐使用。            | const MyComponent = () => {}                 |
| 类组件 (Class Component)      | 用 class 来定义，老版用得多。现在一般少用了。 | class MyComponent extends React.Component {} |

**注意**：现在开发推荐只用**函数组件**，配合 Hook，比如 useState、useEffect。

### 小结一下

✅ 组件名首字母必须大写。

✅ 组件返回的内容只能有一个最外层标签（比如 `<div>`）。

✅ 一个组件可以在另一个组件里被引入和复用。

✅ 现在推荐用**函数组件 + Hook**开发。
