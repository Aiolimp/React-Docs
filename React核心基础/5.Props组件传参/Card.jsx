// 这个功能类似于Vue的插槽，直接在子组件内部插入标签会自动一个参数props.children
const Card = ({ children }) => {
  return <div>{children}</div>;
};

export default Card;
