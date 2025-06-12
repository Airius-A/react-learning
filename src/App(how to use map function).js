// 项目的根组件
// App -> index.js -> public/index.html(root)

const list = [
  {id: 100, name: "DK"},
  {id: 101, name: "Tiny"},
  {id: 102, name: "Axe"},
  {id: 103, name: "Faceless void"},
  {id: 104, name: "Phantom Assisan "},
]

function App() {
  return (
    <div className="App">
      this is App
      {/* {渲染列表} */}
      {/* {map 循环哪个结构 return 哪个结构} */}
      {/* {注意事项： 加上独一无二的key 字符串或者number id} */}
      {/* {key 的作用是react 框架内部使用的 用来提升更新性能的} */}
      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>

    </div>
  );
}

export default App;
