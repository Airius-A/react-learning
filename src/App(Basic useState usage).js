// 项目的根组件
// App -> index.js -> public/index.html(root)
import {useState} from 'react'  

// useState 实现一个计数器按钮（自增）

function App() {
  // 1. 调用useState添加一个状态变量
  // count 状态变量
  // setCount 修改状态变量的方法
  const [count, setCount] = useState(0)

  //2. 点击事件回调
  const handleclick = () => {
    // 作用： 1. 修改我们的count值。 2. 重新使用新的count去渲染UI
    setCount (count + 1) 
  }
  return (
    <div>
      <button onClick={handleclick}>{count}</button>
    </div>
  );
}

export default App;
