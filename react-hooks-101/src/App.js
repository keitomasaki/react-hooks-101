import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((previousCount) => previousCount + 1);
  const decrement2 = () => setCount((previousCount) => previousCount - 1);

  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const divid3 = () => setCount(count % 3 === 0 ? count / 3 : count);

  return (
    <div>
      <div>
        <div>count: {count}</div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>+1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divid3}>3の倍数の時だけ3割る</button>
      </div>
    </div>
  );
};

export default App;
