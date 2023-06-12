import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };
  const handleExtraSpaces = () => {
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 my-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 my-1" onClick={handleCopy}>
            Copy text
          </button>
          <button
            disabled={text.length===0} className="btn btn-primary my-2 mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
