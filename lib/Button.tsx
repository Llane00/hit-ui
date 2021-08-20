import React, { useState } from "react";

function Button() {
  const [n, setN] = useState(0);

  function handleClick() {
    console.log(1)
    setN(n + 1)
  }

  return (
    <div>
      <div>number: {n}</div>
      <button onClick={handleClick}>add 1</button>
    </div>
  );
}

export default Button;