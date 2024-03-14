import React, { useState } from "react";

function First() {
  const [inputs, setInputs] = useState(["0"]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAdd = () => {
    setInputs([...inputs, "0"]);
    setErrorMessage("");
  };

  const handleDelete = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
    setErrorMessage("");
  };

  const handleChange = (event, index) => {
    const inputValue = event.target.value;
    const isValidInput = /^\d*\.?\d*$/.test(inputValue);

    if (isValidInput) {
      const newInputs = [...inputs];
      newInputs[index] = inputValue;
      setInputs(newInputs);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid number.");
    }
  };

  const handleSum = () => {
    // const sum = inputs.reduce((acc, current) => acc + parseFloat(current || 0), 0);
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
      if(isNaN(inputs[i])){
        sum += 0
      }
      else{
        sum += parseFloat(inputs[i] || 0);
      }
    }
    return sum;
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index} style={{ display: "flex" }}>
          <input
            type="text"
            value={input}
            onChange={(event) => handleChange(event, index)}
          />
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAdd}>Add</button>
      <br />
      <p>Sum: {handleSum()}</p>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default First;