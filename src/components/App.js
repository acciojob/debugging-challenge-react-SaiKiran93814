import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div className="app-container">
      <h1>{count}</h1>
      <button onClick={handleClick} className="increment-btn">
        Increment
      </button>
    </div>
  );
};

export default App;
