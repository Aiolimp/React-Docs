# JSX 规则

在 React 中使用 JSX 时，有一些特定的规则和约定需要遵守。以下是 JSX 中的一些常见规则：

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

# **渲染数组**

在 React 中，JSX 可以渲染数组，通常用于动态生成多个元素。要渲染一个数组，你可以使用 map() 方法将数组中的每个元素转换为 React 元素，并返回它们。

### **1.** 使用 map() 渲染数组

```jsx
const items = ['Apple', 'Banana', 'Cherry'];

const element = (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li> // 每个元素需要一个唯一的 `key` 属性
    ))}
  </ul>
);
```

在上面的例子中，map() 方法遍历 items 数组并为每个元素生成一个 <li> 标签。**key** 是 React 用来标识哪些元素发生变化的一个特殊属性。React 需要一个唯一的 key 来优化渲染性能。

### 2.**渲染对象数组**

```jsx
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

const element = (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        {user.name} is {user.age} years old.
      </li>
    ))}
  </ul>
);
```

### **3.渲染数组中的其他 React 组件**

```jsx
function User({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

const element = (
  <div>
    {users.map((user) => (
      <User key={user.id} name={user.name} age={user.age} />
    ))}
  </div>
);
```

### 4.**渲染条件数组**

```jsx
const items = [];

const element = (
  <div>
    {items.length > 0 ? (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>No items available</p>
    )}
  </div>
);
```

### 5.**避免使用索引作为 key（除非数据不会变化）**

**何时可以使用索引作为 key？**

- 数据不会发生变化：如果数据是静态的（即渲染后不会进行排序或修改）
- 数据没有独特标识符：如果你的数据没有唯一标识符，而数据本身是静态的，使用索引也可以。

```jsx
const element = (
  <ul>
    {['Apple', 'Banana', 'Cherry'].map((item, index) => (
      <li key={index}>{item}</li> // 使用索引作为 key，因为数据不会改变
    ))}
  </ul>
);
```

**尽量使用对象的 id | 数据库中的唯一标识符 | 其他唯一字段**

```jsx
const users = [
  { id: 'u1', name: 'Alice' },
  { id: 'u2', name: 'Bob' },
  { id: 'u3', name: 'Charlie' },
];

const element = (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li> // 使用唯一的 id 作为 key
    ))}
  </ul>
);
```
