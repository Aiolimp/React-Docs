# JSX 规则

### **1.** **所有标签必须闭合**

在 JSX 中，每个标签必须被正确闭合。即使是像 <img> 或 <br> 这样的自闭合标签，也需要在末尾加上斜杠。

```jsx
// 正确的写法
const element = <img src="logo.png" alt="Logo" />;
```

如果忘记加斜杠，React 会报错。

### **2.** **JSX 不能返回多个根元素**

每个 JSX 表达式只能返回一个根元素。若需要多个元素，可以使用 React.Fragment 或空标签 <> 来包裹它们。

```jsx
// 正确的写法
const element = (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

### **3.** **属性使用小驼峰命名法**

在 JSX 中，HTML 属性名必须使用小驼峰命名法，而不是 HTML 中的标准属性名。例如：

- class -> className
- for -> htmlFor
- tabindex -> tabIndex

```jsx
const element = (
  <div className="container" tabIndex={1}>
    Content
  </div>
);
```

### **4.** **JSX 中只能嵌入 JavaScript 表达式**

JSX 中的内容必须是有效的 JavaScript 表达式。例如，字符串、数字、函数调用等都可以放在大括号 {} 中。

```jsx
const name = 'React';
const element = <h1>Hello, {name}!</h1>; // 这是一种有效的 JavaScript 表达式
```

**不能嵌入语句：**

```jsx
// 错误写法
const element = <h1>{if (true) { console.log("Hello"); }}</h1>;
```

### **5.** **事件处理函数使用小驼峰命名法**

在 JSX 中，事件处理函数采用小驼峰命名法。例如，onClick、onChange 等。

```jsx
function handleClick() {
  alert('Button clicked!');
}

const element = <button onClick={handleClick}>Click me</button>;
```

### **6.** JavaScript 表达式需用大括号 {} 包裹

在 JSX 中插入 JavaScript 代码时，需要使用大括号 {}。只有 JavaScript 表达式能放入大括号，不能放入语句或函数。

```jsx
const sum = 1 + 2;
const element = <h1>{sum}</h1>; // 正确
```

### **7.** **每个组件必须返回一个元素**

React 组件需要返回一个包含 UI 的单一元素。如果组件返回多个元素，它们需要被包装在一个根元素中，如 div 或 React.Fragment。

```jsx
// 正确的写法
function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}
```

### **8.** **属性值的类型**

在 JSX 中，属性值通常是字符串，但它也可以是 JavaScript 表达式。如果属性值是 JavaScript 表达式，需要用大括号包裹。

```jsx
const name = 'Sara';
const element = <h1>Hello, {name}!</h1>; // 使用 JavaScript 表达式
```

### **9.** **避免使用关键字**

JSX 中不允许使用 JavaScript 保留的关键字作为属性名或变量名。比如 for 和 class 是关键字，所以不能用作属性。

```tsx
// 错误的写法
const element = <div for="input">Content</div>;

// 正确的写法
const element = <div htmlFor="input">Content</div>;
```

### **10.** 多行 JSX 需要包裹在括号中

如果 JSX 的代码占用多行，最好将其包裹在括号中，以便于代码的可读性和避免语法错误。

```tsx
const element = (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

### 11.避免属性值为 false 或 null

如果属性值为 false 或 null，React 会将该属性从渲染的元素中移除。例如：

```tsx
// 这不会渲染任何属性
const element = <div disabled={false}>Content</div>;
```
