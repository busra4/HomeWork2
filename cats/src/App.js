import React from "react";
import Counter from "./Components/Counter";
import Reset from "./Components/Reset";
import { GiHollowCat } from "react-icons/gi";
import "./App.css";
export default function App() {
  const [Sawcount, setSawCount] = React.useState(0);

  let incrementCount = () => {
    setSawCount(Sawcount + 1);
  };

  let ResetCount = () => {
    setSawCount(0);
  };

  return (
    <div className="root">
      <div>
        <div class="count_root">
          <GiHollowCat style={{ width: "20%", height: "20%", color: "purple" }}/>
          <h1> How many cats have you seen?</h1>
          <h1> I saw {Sawcount} cats</h1>
          <div className="button">
            <Counter increase={"I saw another one"} counts={incrementCount} />
            <Reset increase={"Reset cats"} counts={ResetCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
