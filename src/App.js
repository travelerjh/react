function App() {
  // jsx 가 js  코드로 변환됨
  // 따라서 js 키워드를 사용할수 없다 .

  return (
    <>
      {/* class 속성은 classNaeme 으로 작성*/}
      <div className="header"> Lorem ipsum dolor.</div>
      <div className="error"> Lorem ipsum dolor.</div>
      <div>
        <label htmlFor="nameInput"> 이름</label>
        <input type="text" id="nameInput" />
      </div>
    </>
  );
}

export default App;
