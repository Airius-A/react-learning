// 项目的根组件
// App -> index.js -> public/index.html(root)

const ArticleType = 1// switch number 0 1 3 to change type

function ArticleTypeTem(){
  if (ArticleType === 0){
    return <div>我是无图模式</div>
  } else if (ArticleType === 1){
    return <div>我是单图模式</div>
  } else {
    return <div>我是三图模式</div>
  }
}

function App() {
  return (
    <div className="App">
      {ArticleTypeTem()}
    </div>
  );
}

export default App;
