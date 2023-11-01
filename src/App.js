function App() {
  const mystyle = {};
  return (
    <>
      <div>
        <MyComp value="흥민" address="신촌" />
        <MyComp value="강인" address="강남" />
      </div>
    </>
  );
}

// 함수 인자로
// 사용한 곳에서 넘긴 property 들이 객채로 담김
// 예 title ="내컴포넌트"  => {title:"내컴포넌트"}

function MyComp({ value, address }) {
  return (
    <div>
      <h1>
        이름 ={value} 사는곳 ={address}
      </h1>
    </div>
  );
}

export default App;
