import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  // React 组件是返回标签的 JavaScript 函数
  function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }

  return (
    <>
      <h1>{user.name}</h1>
      <img
        // 添加 css 样式, avatar 样式见 ./App.css
        className="avatar"
        // 显示数据1
        src={user.imageUrl}
        // 显示数据2
        alt={'Photo of ' + user.name}
        // 显示数据3
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <br/>
      <br/>
      {/* <MyButton /> 是 react 组件, 必须以大写字母开头 */}
      <MyButton />
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
