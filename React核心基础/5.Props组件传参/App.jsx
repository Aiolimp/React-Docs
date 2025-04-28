import Components from './Components';
import Card from './Card';
const App = () => {
  return (
    <div>
      <Components
        title={'标题'}
        id={1}
        obj={{ a: 1, b: 2 }}
        arr={[1, 2, 3]}
        cb={(a, b) => a + b}
        empty={null}
        element={<div>测试</div>}
        isGirl={false}
      ></Components>
      <div>
        <h1>My Cards</h1>
        <Card>
          <h2>Card Title 1</h2>
          <p>This is some content for card 1.</p>
        </Card>
        <Card>
          <h2>Card Title 2</h2>
          <p>This is some content for card 2.</p>
        </Card>
        <Card>
          <h2>Card Title 3</h2>
          <p>This is some content for card 3.</p>
        </Card>
      </div>
    </div>
  );
};
export default App;
