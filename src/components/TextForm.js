import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUcClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert(' Text converted to Uppercase', 'success')
  };

  const handleLcClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert(' Text converted to Lowercase', 'success')
  };

  const handleClearText = () => {
    setText(" ");
    props.showAlert(' Text cleared', 'warning')
  };

  const handleCopy = () => {
    const text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(' copied to Clipboard', 'success')
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(' Extra spaces removed', 'success')
  };

  return (
    <>
      <div className="container my-4">
        <h1 className={`text-${props.mode === 'light'? 'dark': 'light'}`}>{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="textBox"
            value={text}
            onChange={handleOnChange}
            style={{ height: 200, backgroundColor: props.mode === 'light'? 'azure': 'black', color: props.mode === 'light'? 'black': 'white'}}
          ></textarea>
        </div>
      </div>
      <div className="container">
        <button
          className="btn btn-success"
          type="button"
          onClick={handleUcClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-success ms-2"
          type="button"
          onClick={handleLcClick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-success ms-2"
          type="button"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          className="btn btn-success ms-2"
          type="button"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-success ms-2"
          type="button"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container my-4 text-${props.mode === 'light'? 'dark': 'light'}`}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            Words: {text.split(" ").length} & Characters: {text.length}
          </b>
        </p>
        <p>
          <b>
            {0.0032 * text.split(" ").length} minutes to read (Average reader)
          </b>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter the text in the above box to Preview here"}
        </p>
      </div>
    </>
  );
}
