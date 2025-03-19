// BannerPreview.jsx
import React from "react";

const BannerPreview = ({ bannerSettings }) => {
  const { text, bgColor, textColor, width, height, image } = bannerSettings;

  const previewStyle = {
    backgroundColor: bgColor,
    color: textColor,
    width: `${width}px`,
    height: `${height}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #ccc",
    margin: "10px 0",
    position: "relative",
    overflow: "hidden", // Make sure content doesn't overflow
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 1, // Set to 1 temporarily for debugging
    // zIndex: -1,    // Remove zIndex temporarily to test layering
  };

  return (
    <div className="banner-preview" style={previewStyle}>
      {image && <img src={image} alt="Banner" style={imageStyle} />}
      <span style={{ position: "relative", zIndex: 1 }}>{text}</span>
    </div>
  );
};

export default BannerPreview;
