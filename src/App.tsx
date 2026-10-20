import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);

  const formatter = new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
  });

  const usdToCzk = 22;
  const goldGram = 133;

  const result = goldGram * usdToCzk * amount;

  return (
    <>
      <h1>Gram zlata na CZK</h1>

      <h3>Podívejte se, co můžete dostat za své zlato:</h3>

      <input
        type="number"
        placeholder="Zadejte počet gramů"
        value={amount}
        onChange={(e) => {
          const newAmount = Number(e.target.value);
          setAmount(newAmount);
        }}
      />

      <p>{formatter.format(result)}</p>

      <h4>Nenechte se zbytečně odrbat zastavárnou, za své zlato dostaňte to, co reálně stojí</h4>
    </>
  );
}

export default App;
