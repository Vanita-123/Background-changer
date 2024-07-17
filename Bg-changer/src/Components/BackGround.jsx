import { useState } from "react";
function BackGround() {
  const [color, setColor] = useState("Black");
  const [change, setChange] = useState("red");
  const data = "#" + Math.floor(Math.random() * 7867).toString(16);
  const handleColor = (item) => {
    setColor(item);
  };
  const handleChange = () => {
    setChange(data);
    console.log(data);
  };

  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: color,
            border: " 2px solid black",
            padding: "100px",
            color: "white",
            fontSize: "30px",
          }}
        >
          Color Change Using Button
        </div>
        <div style={{ color: "white", marginTop: "10px" }}>
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => handleColor("black")}
          >
            Black
          </button>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => handleColor("red")}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => handleColor("blue")}
          >
            Blue
          </button>
          <button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => handleColor("green")}
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "yellow", color: "white" }}
            onClick={() => handleColor("yellow")}
          >
            Yellow
          </button>
          <button
            style={{ backgroundColor: "orange", color: "white" }}
            onClick={() => handleColor("orange")}
          >
            Orange
          </button>
        </div>
      </div>
      <hr style={{ marginTop: "70px" }}></hr>
      <div
        style={{
          backgroundColor: change,
          border: " 2px solid black",
          padding: "100px",
          marginTop: "70px",
          fontSize: "30px",
        }}
      >
        Random Color Generated {data}
      </div>
      <div style={{ marginTop: "10px" }}>
        <button
          style={{ backgroundColor: "Black", color: "white" }}
          onClick={() => handleChange("data")}
        >
          Click it
        </button>
      </div>
    </>
  );
}

export default BackGround;
