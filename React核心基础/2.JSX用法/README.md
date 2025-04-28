# JSX

React 的 JSX 是一种 JavaScript 语法扩展，它允许你在 JavaScript 代码中写 HTML 样式的标记。JSX 的最终目的是生成 React 元素，React 会根据这些元素构建 UI。

以下是 JSX 语法的一些关键点：

### **1.** **基础结构**

JSX 语法看起来像 HTML，但它是 JavaScript 的一部分。每个 JSX 标签都会转换成 React 元素。例如：

```jsx
const element = <h1>Hello, world!</h1>;
```

### **2.** **表达式插值**

你可以在 JSX 中嵌入 JavaScript 表达式，表达式需要用大括号 {} 包围。

```jsx
const name = 'React';
const element = <h1>Hello, {name}!</h1>;
```

### **3.** **属性**

JSX 属性使用小驼峰命名法，而不是 HTML 中的连字符。例如，class 在 JSX 中变成 className，for 变成 htmlFor。

```jsx
const element = <div className="container">Content</div>;
```

### **4.** **条件渲染**

可以在 JSX 中使用 JavaScript 的条件语句来渲染不同的内容：

```jsx
// 使用三元运算符
const isLoggedIn = true;
const element = <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign up.'}</h1>;

// 使用短路运算符
const element = <h1>{isLoggedIn && 'Welcome back!'}</h1>;
```

### **5.** **事件处理**

React 事件处理使用小驼峰命名法，并且事件处理函数需要作为属性传递。

```jsx
function handleClick() {
  alert('Button clicked!');
}

const element = <button onClick={handleClick}>Click me</button>;
```

### **6.** **嵌套组件**

JSX 可以嵌套组件，也就是可以在一个组件中使用其他组件。

```jsx
function MyComponent() {
  return <h1>Hello from MyComponent</h1>;
}

const element = <MyComponent />;
```

### **7.** **多行 JSX**

JSX 如果跨越多行，需要用括号包裹起来，以确保返回的是一个单一的表达式。

```jsx
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>This is a JSX example.</p>
  </div>
);
```

### **8.** **JSX 不等于 HTML**

JSX 看起来像 HTML，但它更接近于 JavaScript。比如，在 JSX 中需要使用 className 而不是 class，并且所有标签必须闭合。

```jsx
// JSX 是这样的：
const element = <img src="logo.png" alt="Logo" />;
```

### **9.** **返回多个元素**

React 组件需要返回一个单一的元素。如果你想返回多个元素，必须用一个包裹元素，或者使用 React.Fragment。

```jsx
const element = (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

### 10. 组件使用

可以在 JSX 中使用自定义组件，且组件名称必须以大写字母开头。

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const element = <Welcome name="Sara" />;
```

这些是 JSX 语法的一些基本概念。使用 JSX 编写的代码最后会通过 Babel 等工具转换成 React.createElement 调用，从而生成最终的 UI。
