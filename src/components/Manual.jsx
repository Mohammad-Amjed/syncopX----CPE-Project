import React from "react";
import "../styles/Manual.css";

// it will be embeded from paste website.
function Manual() {
  return (
    <div id="manual" className="manual">
      <iframe
        src="https://pasteapp.com/p/sGQ9KOJt5Em/embed?view=Wk98VjGH2B5"
        width={document.body.offsetWidth}
        height="800"
        scrolling="no"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Manual;
