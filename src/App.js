function App() {
  //1부터 100까지 난수발생
  const number = Math.ceil(Math.random() * 100);

  return (
    <>
      <div>난수 {number > 50 ? "큰수" : "작은수"}</div>
      <div>{number > 50 ? <Bigp /> : <Smallp />}</div>
    </>
  );
}

function Bigp() {
  return <h1>큰 이미지</h1>;
}
function Smallp() {
  return <h1>작은 이미지</h1>;
}

export default App;
