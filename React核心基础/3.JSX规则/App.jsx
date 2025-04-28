// 1. JSX 不能返回多个根元素
// 每个 JSX 表达式只能返回一个根元素。若需要多个元素，可以使用 React.Fragment 或空标签 <> 来包裹它们。
// 注意：React.Fragment 是一个特殊的组件，它不会在渲染时创建额外的 DOM 节点。
// const App = () => {
//   return (
//     <>
//       <h1>Title</h1>
//       <p>Description</p>
//     </>
//   );
// };

// 2. 所有标签必须闭合
// 在 JSX 中，每个标签必须被正确闭合。即使是像 <img> 或 <br> 这样的自闭合标签，也需要在末尾加上斜杠。

// const App = () => {
//   return <img src="logo.png" alt="Logo" />;
// };

// 3. 属性使用小驼峰命名法
// 在 JSX 中，HTML 属性名必须使用小驼峰命名法，而不是 HTML 中的标准属性名。例如：
// 	•	class -> className
// 	•	for -> htmlFor
// 	•	tabindex -> tabIndex
// const App = () => {
//   return (
//     <div className="container" tabIndex={1}>
//       Content
//     </div>
//   );
// };

// 4. JSX 中只能嵌入 JavaScript 表达式
// JSX 中的内容必须是有效的 JavaScript 表达式。例如，字符串、数字、函数调用等都可以放在大括号 {} 中。
// const App = () => {
//   return (
//     <h1>Hello, {name}!</h1> // 这是一种有效的 JavaScript 表达式
//   );
// };
// 错误写法
// const element = <h1>{if (true) { console.log("Hello"); }}</h1>;

// // 5.事件处理函数使用小驼峰命名法
// 在 JSX 中，事件处理函数采用小驼峰命名法。例如，onClick、onChange 等。
function handleClick() {
  alert('Button clicked!');
}

const App = () => {
  return <button onClick={handleClick}>Click me</button>;
};
export default App;
