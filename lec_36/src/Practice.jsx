import React, { useState } from "react";

function ArrayPractice() {
  const [data, setData] = useState(["ubaid", "noor", "ali"]);
  const [index, setIndex] = useState(0);
  function handleName(val, index) {
    console.log("val", val);
    console.log("index", index);
    data[index] = val;
    setData([...data]);
  }

  return (
    <>
      <h1>Updating Array</h1>
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <select
        name="index"
        id=""
        onChange={(index) => setIndex(index.target.value)}
      >
        {data.map((item, index) => {
          return <option value={index}>{index}</option>;
        })}
      </select>

      <input
        type="text"
        placeholder="Change your name"
        onChange={(event) => handleName(event.target.value, index)}
      />
    </>
  );
}

export default ArrayPractice;
