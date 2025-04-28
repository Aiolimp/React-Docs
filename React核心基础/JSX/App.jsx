const App = () => {
  const name = 'React';
  const isLoggedIn = true;
  function handleClick() {
    alert('Button clicked!');
  }
  function MyComponent() {
    return <h1>Hello from MyComponent</h1>;
  }
  return (
    <section id="section">
      {/* 表达式插值 */}
      <div>Hello, {name}!</div>
      {/* class 在 JSX 中变成 className */}
      <div className="container">Content</div>
      {/* 条件渲染 */}
      <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign up.'}</h1>
      {/* 事件处理 */}
      <button onClick={handleClick}>Click me</button>
      {/* 嵌套组件 */}
      <MyComponent />
      {/* 多行 JSX */}
      <div>
        <h1>Hello, world!</h1>
        <p>This is a JSX example.</p>
      </div>
    </section>
  );
};

/* 返回多个元素 */
// const element = (
//   <>
//     <h1>Title</h1>
//     <p>Description</p>
//   </>
// );

export default App;
