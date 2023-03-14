import React from "react";

export default function About(props) {
  return (
    <>
      <div className="accordion container my-4 py-4" id="accordionExample">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          About Me
        </h1>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "azure" : "#023b61",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "azure" : "#205a57",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "light" ? "azure" : "#023b61",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>Free to use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "azure" : "#205a57",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              TextUtils is a free character counter tool that provides instant character count and word count statistics for a given count. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "light" ? "azure" : "#023b61",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>Browser compatibility</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "azure" : "#205a57",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
