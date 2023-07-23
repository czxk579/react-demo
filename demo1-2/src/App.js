// 1.从 React 引入 useState
import { useState } from 'react'; 

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <br/>
      <MyButton />
    </div>
  );
}

function MyButton() {
  // 2.声明一个 state 变量 count,
  const [count, setCount] = useState(0);

  function handleClick() {
    // 3.更新 count 值
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
