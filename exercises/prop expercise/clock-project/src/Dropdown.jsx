import { useState } from "react";
import Clock from "./Clock.jsx";

function Dropdown() {
  const [color, setColor] = useState("pink");
  function changeHandler(event) {
    const color = event.target.value;
    setColor(color);
  }
  return (
    <>
      {" "}
      changeHandler
      <h3>Drop Down</h3>
      <select
        onChange={changeHandler}
        name="color"
        id=""
        style={{
          width: "140px",
          textAlign: "center",
          backgroundColor: color,
          color:
            color === "yellow"
              ? "red"
              : color === "cyan"
              ? "black"
              : color === "pink"
              ? "black"
              : "white",
          height: "40px",
        }}
      >
        <option selected disabled>
          Select the Color
        </option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="grey">Grey</option>
        <option value="cyan">Cyan</option>
      </select>
      <Clock color={color} />
    </>
  );
}

export default Dropdown;
