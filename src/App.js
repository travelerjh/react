import age, { address, MyElem } from "./component/MyElem";
import MyBox, { person } from "./component/MyBox";

function App() {
  const mystyle = {};
  return (
    <>
      <div>
        <h1> {address}</h1>
        <h1> {MyElem}</h1>
        <h1>
          {" "}
          {age}
          {person.age},{person.name}
        </h1>

        <MyBox />
      </div>
    </>
  );
}

// 함수 인자로
// 사용한 곳에서 넘긴 property 들이 객채로 담김
// 예 title ="내컴포넌트"  => {title:"내컴포넌트"}

export default App;
