import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("");
  const [showLineNumbers, setShowLineNumbers] = useState(true);

  const generateLineNumbers = () => {
    return Array.from({ length: text.split("\n").length }, (_, i) => i + 1).join("\n");
  };

  return (
    <div className="notepad-container">
      {/* Toolbar */}
      <div className="toolbar">
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
          <option value="Dank Mono">Dank Mono</option>
        </select>

        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="12px">12px</option>
          <option value="16px">16px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
        </select>

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <button onClick={() => setShowLineNumbers(!showLineNumbers)}>
          {showLineNumbers ? "Hide" : "Show"} Line Numbers
        </button>
      </div>

      {/* Editor Section */}
      <div className="editor-container">
        {showLineNumbers && (
          <textarea
            className="line-numbers"
            value={generateLineNumbers()}
            style={{ fontSize }}
            readOnly
          ></textarea>
        )}
        <textarea
          className="text-editor"
          style={{ fontFamily, fontSize, color }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default App;

