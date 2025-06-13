// 项目的根组件
// App -> index.js -> public/index.html(root)

import { useState } from "react";


function App() {
  let [count, setCount] = useState(0)

  const clickButton = () => {
    // 直接修改 虽然会更改count的参数，但是不会刷新UI
    // count ++
    // console.log(count)

    //所以要用setCount来对count赋予新值，并且会自动刷新渲染UI
    setCount(count + 1)
  }

  // 修改对象状态
  const [Form, setForm] = useState({
    name: 'Jack'
  })

  const changeFrom = () =>{
    setForm ({
      ...Form,
      name: "Airius"
    })
  }

  return (
    <div className="App">
      <button onClick={clickButton}>{count}</button>
      <button onClick={changeFrom}>修改名字 + {Form.name}</button>
    </div>
  );
}

export default App;
