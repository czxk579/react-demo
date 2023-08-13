import './App.css';

// 1.组件名 <Profile /> 必须以大写 P 开头，以区分 HTML 标签
function Profile() {
  // 2.返回 JSX 标签
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function App() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
