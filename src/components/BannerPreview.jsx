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
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.3, // Adjust opacity so text is visible
    zIndex: -1,
  };

  return (
    <div className="banner-preview" style={previewStyle}>
      {image && <img src={image} alt="Banner" style={imageStyle} />}
      <span>{text}</span>
    </div>
  );
};

export default BannerPreview;
