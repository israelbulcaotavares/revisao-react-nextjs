import { useState } from "react";
import ContadorDisplay from "../../components/ContadorDisplay";

export default function contador() {
  const [num, setNum] = useState(0);

  function inc() {
    setNum(num - 1);
  }

  function dec() {
    setNum(num + 1);
  }

  const increment = () => setNum(num - 1);

  const decrement = () => setNum(num - 1);

  return (
    <div style={{ 
        
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"

    }}>
      <div>
        <button onClick={() => setNum(num - 1)}>-</button>
        <button onClick={() => setNum(num + 1)}>+</button>
      </div>
      
      <h1>Contador</h1>
      <ContadorDisplay numero={num} />
      <div>Valor: {num}</div>
      <button onClick={inc}>-</button>
      <button onClick={dec}>+</button>

      <div>
        <button onClick={increment}>-</button>
        <button onClick={decrement}>+</button>
      </div>
    </div>
  );
}
