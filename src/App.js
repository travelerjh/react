function MyCom() {
  let name = "손흥민";
  let age = 33;

  //   { } : jsx 에서 자바스크릅트 코드 작성하기 위한 기호
  return (
    <>
      <h1> hello react</h1>
      <h1> hello {name}</h1>
      <h1> {age} years</h1>
      <h1>
        {" "}
        {age * 2} {name + "선수"}
        {/* 그래서 주석이 이렇게 생겼어요 */}
      </h1>
    </>
  );
}

function App() {
  return (
    <div>
      <h1> hello </h1>
      <My />
      <MyCom />
    </div>
  );
}

// 브라우저가 기본으로 제공하는 컴포넌트는  소문자로 시작  ex>  div , h1 --> built-in component
// 우리가 직접 만드는 컴포넌트는 대문자로 시작   <My>

// 함수는 return 문을 가져야 한다.
// 항상그런건 아니지만  return 값은  보통 JSX 코드다
// return 값이 여러줄이면 () 감싸기

function My() {
  // return 문에 jsx 코드 작성 가능
  // 꼭 하나의 root tag 가 존재해야 한다. 두개의 테그는 안된다.
  // root tag 가 필요 없다면  fragment 사용 가능   ex )   -->     <>    </>

  // jsx 주석 사용법 {/*  */}
  // jsx 에서 태그 사용시 꼭 종료 태그를 작성해야함
  // 비어 있는 요소이면 시작태그에서 종료
  return (
    <div>
      <h1> hi com</h1>
      <h3> bye com </h3>
    </div>
  );
}

export default App;
