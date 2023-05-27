import React, { useState } from "react";

function Toggle() {
  const [state, setState] = useState(false);

  function toggleState() {
    setState((state) => !state);
  }

  const color = state ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={toggleState}>
      {state ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
