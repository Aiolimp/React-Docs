const Child = ({ title = '默认标题', id, obj, arr, cb, empty, element, isGirl }) => {
  // 测试回调函数
  const callbackResult = cb ? cb(2, 3) : null;
  return (
    <div>
      <h2>子组件接收到的Props:</h2>
      <p>标题: {title}</p>
      <p>ID: {id}</p>
      <p>
        对象值: a={obj.a}, b={obj.b}
      </p>
      <p>数组: {arr.join(', ')}</p>
      <p>回调函数结果(2+3): {callbackResult}</p>
      <p>空值: {empty === null ? 'null' : '非null'}</p>
      <div>接收到的React元素: {element}</div>
      <p>性别: {isGirl ? '女' : '男'}</p>
    </div>
  );
};

export default Child;
