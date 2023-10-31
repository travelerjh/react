function App() {
  const mystyle = {
    color: "blue",
    background: "gold", // black-ground 안됨   카멜 케이스로 backGround
    fontSize: "30px",
    textAlign: "center",
  }; // js object

  return (
    <>
      <div style={mystyle}> Lorem ipsum dolor.</div>
      {/*  {{ }} 이렇게 쓰는 이유는 자바스크립트쓰고  인라인스타일쓰려고  */}
      <div
        style={{ color: "red", backgroundColor: "skyblue", fontSize: "30px" }}
      >
        {" "}
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;
