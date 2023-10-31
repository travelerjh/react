function App() {
  return (
    <div>
      <MyCompoent1/>
      <MyCompoent2/>
    </div>
  );
}

function  MyCompoent1(){
  return  <div> Hello Component</div>
}

function  MyCompoent2(){
  return (
           <>
             <p> Lorem ipsum dolor sit. </p>
              <ul>
                <li>lorem</li>
                <li>ipsum</li>
                <li>dolor</li>
              </ul>
           </>

          )

}


export default App;
