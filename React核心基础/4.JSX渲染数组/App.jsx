// 1.使用 map() 渲染数组
// const items = ['Apple', 'Banana', 'Cherry'];
// const element = (
//   <ul>
//     {items.map((item, index) => (
//       <li key={index}>{item}</li> // 每个元素需要一个唯一的 `key` 属性
//     ))}
//   </ul>
// );
// 2.渲染对象数组
// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 },
// ];

// const element = (
//   <ul>
//     {users.map((user) => (
//       <li key={user.id}>
//         {user.name} is {user.age} years old.
//       </li>
//     ))}
//   </ul>
// );

// 3.渲染数组中的其他 React 组件
// function User({ name, age }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 },
// ];

// const element = (
//   <div>
//     {users.map((user) => (
//       <User key={user.id} name={user.name} age={user.age} />
//     ))}
//   </div>
// );

// 4.渲染条件数组

// const items = [];

// const element = (
//   <div>
//     {items.length > 0 ? (
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     ) : (
//       <p>No items available</p>
//     )}
//   </div>
// );

// 5.避免使用索引作为 key（除非数据不会变化）
// 何时可以使用索引作为 key？
//  1.	数据不会发生变化：如果数据是静态的（即渲染后不会进行排序或修改），那么索引作为 key 是可以接受的。
// 	2.	数据没有独特标识符：如果你的数据没有唯一标识符，而数据本身是静态的，使用索引也可以。
// 当数据不变时使用索引作为 key
// const element = (
//   <ul>
//     {['Apple', 'Banana', 'Cherry'].map((item, index) => (
//       <li key={index}>{item}</li> // 使用索引作为 key，因为数据不会改变
//     ))}
//   </ul>
// );

// 使用对象的 id | 数据库中的唯一标识符 其他唯一字段
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
