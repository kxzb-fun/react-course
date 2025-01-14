// import FAQList from "./components/FAQList"
import Counter from "./components/Counter";
import { useState } from "react";
const App = () => {
  const [myColor, setMyColor] = useState(false);
  return (
    <>
      <Counter />
      {myColor ? <Counter myColor={myColor} /> : <Counter/>} 

      <div>
        <button onClick={()=>setMyColor(true)}>change color</button>
      </div>
    </>
  );
};

export default App;
