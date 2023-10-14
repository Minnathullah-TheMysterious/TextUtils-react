import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUcClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Text converted to Uppercase", "success");
  };

  const handleLcClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Text converted to Lowercase", "success");
  };

  const handleClearText = () => {
    setText(" ");
    props.showAlert(" Text cleared", "warning");
  };

  const handleCopy = () => {
    // const text = document.getElementById("textBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges() // to remove select
    navigator.clipboard.writeText(text);
    props.showAlert(" copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed", "success");
  };

  return (
    <>
      <div className="container my-4">
        <h1
          className={`my-4 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {props.heading}
        </h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="textBox"
            value={text}
            onChange={handleOnChange}
            style={{
              height: 200,
              backgroundColor: props.mode === "light" ? "azure" : "#26473d",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
      </div>
      <div className="container">
        <button
          className="btn btn-success mx-1 my-1"
          type="button"
          onClick={handleUcClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          type="button"
          onClick={handleLcClick}
          disabled={text.length === 0}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          type="button"
          onClick={handleClearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          type="button"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-success mx-1 my-1"
          type="button"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container my-4 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            Words:{" "}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            & Characters: {text.length}
          </b>
        </p>
        <p>
          <b>
            {0.0032 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes to read (Average reader)
          </b>
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview here"}</p>
      </div>
    </>
  );
}
