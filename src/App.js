function App() {
  const mystyle = {};
  return (
    <>
      <div>
        <MyComp name="흥민" age={30} city="신촌" address="서울" />
        <MyComp name="흥민" city="신촌" address="서울" />
      </div>
    </>
  );
}

// 함수 인자로
// 사용한 곳에서 넘긴 property 들이 객채로 담김
// 예 title ="내컴포넌트"  => {title:"내컴포넌트"}

function MyComp({ name, address, city, age = 100 }) {
  return (
    <div>
      {name} 은 {age}세 이고 {address},{city}에 산다.
    </div>
  );
}

export default App;
