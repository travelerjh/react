import { MyBox, MyCon, MyElem, name } from "./component/MyBox";

function App() {
  const mystyle = {};
  return (
    <>
      <div>
        <MyBox />
        <MyElem />
        <MyCon />
        <div> {name}</div>
      </div>
    </>
  );
}

// 함수 인자로
// 사용한 곳에서 넘긴 property 들이 객채로 담김
// 예 title ="내컴포넌트"  => {title:"내컴포넌트"}

export default App;
