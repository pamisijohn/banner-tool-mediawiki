import React from "react";

const CodeOutput = ({ bannerSettings }) => {
  const { text, bgColor, textColor, width, height, image } = bannerSettings;

  const generatedCode = `<div style="background-color: ${bgColor}; color: ${textColor}; width: ${width}px; height: ${height}px; display: flex; align-items: center; justify-content: center; position: relative;">
  ${
    image
      ? `<img src="${image}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.3;" alt="Banner Image" />`
      : ""
  }
  ${text}
</div>`;

  return (
    <div className="code-output">
      <h3>Generated Markup</h3>
      <textarea readOnly value={generatedCode} rows="6" cols="60"></textarea>
    </div>
  );
};

export default CodeOutput;
