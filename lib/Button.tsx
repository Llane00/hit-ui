import React, { useState } from "react";

interface buttonProps extends React.DOMAttributes<Element> {

}

const Button: React.FunctionComponent<buttonProps> = (props) => {
  const [n, setN] = useState(0);

  function handleClick() {
    console.log(1)
    setN(n + 1)
  }

  return (
    <div {...props} >
      <div>number: {n}</div>
      <button onClick={handleClick}>add 1</button>
    </div>
  );
}

export default Button;