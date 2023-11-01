function App() {
  const mystyle = {};
  return (
    <>
      <div>
        <h1
          className={"note"}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          lrom
        </h1>
        <p title={"문단 요소"}>lreom</p>
        <Mycom tilte="내컴포넌트" name="흥민" />
        <Mycom tilte="I am 컴포넌트에요" name="강인" />
      </div>
    </>
  );
}

// 함수 인자로
// 사용한 곳에서 넘긴 property 들이 객채로 담김
// 예 title ="내컴포넌트"  => {title:"내컴포넌트"}

function Mycom(props) {
  console.log("Mycom 이 받은 property", props);
  return (
    <div>
      <h1 title={props.tilte}> Hello {props.name}</h1>
    </div>
  );
}

export default App;
