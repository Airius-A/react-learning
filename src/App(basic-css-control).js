// 项目的根组件
// App -> index.js -> public/index.html(root)

import './index.css'

const Style = {
  color: 'blue',
  fontSize: '50px',
}

function App() {

  return (
    <div className="App">
      {/* 行内样式 */}
      <span style={{color: 'red', fontSize: '100px'}}> this is span </span>
      {/* 通过class类名控制 */}
      <span className="foo"> this is from class foo</span>
    </div>
  );
}

export default App;
