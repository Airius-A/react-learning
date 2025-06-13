// 项目的根组件
// App -> index.js -> public/index.html(root)



function App() {
  // 基础绑定
  // const handleclick = ()=>{
  //   console.log("被点击了")
  // }
  //事件参数 e
  // const handleclick = (e)=>{
  //   console.log("被点击了", e)
  // }
  // 传递自定义参数
  // const handleclick = (name)=>{
  //   console.log("被点击了", name)
  // }
  // 既要传递自定义参数，也要事件对象e
  const handleclick = (name, e)=>{
    console.log("被点击了", name, e)
  }

  return (
    <div className="App">
      <button onClick={(e)=>handleclick('jack', e)}>click me</button>
    </div>
  );
}

export default App;
