import { useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";

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
      <NumeroDisplay numero={num} />

      <div>
        <button onClick={increment}>-</button>
        <button onClick={decrement}>+</button>
      </div>
    </div>
  );
}
