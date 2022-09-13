import { useState } from "react";
import ContadorDisplay from "../../components/ContadorDisplay";

export default function contador() {
  const [num, setNum] = useState(0);
  
  const increment = () => setNum(num + 1);
  const decrement = () => setNum(num - 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Contador</h1>
      <ContadorDisplay numero={num} />

      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
