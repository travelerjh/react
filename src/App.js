import MyBox, { city, country, address } from "./component/MyBox";
import MyElem, { address as myAddress, email } from "./component/MyElem";

//as 로 export 값을 import 할때 별칭을 줄수 있음

function App() {
  const mystyle = {};
  return (
    <>
      <div>
        <h1>{myAddress}</h1>
        <MyBox />
        <h1>{address}</h1>
      </div>
    </>
  );
}

export default App;
