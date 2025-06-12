// 项目的根组件
// App -> index.js -> public/index.html(root)

const isLogin = true
function App() {
  return (
    <div className="App">
      {/* {逻辑与 &&} */}
      { isLogin && <span> this is span </span>}
      {/* {三元运算} */}
      {isLogin ? <span>jack</span> : <span>Loading</span>}
    </div>
  );
}

export default App;
