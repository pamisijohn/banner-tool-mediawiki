import React from "react";

const BannerEditor = ({ bannerSettings, updateSettings }) => {
  // Update text, colors, dimensions etc.
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSettings({ ...bannerSettings, [name]: value });
  };

  // Handle image upload: get file and generate a preview URL.
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateSettings({ ...bannerSettings, image: imageUrl });
    }
  };

  return (
    <div className="banner-editor">
      <label>
        Banner Text:
        <input
          type="text"
          name="text"
          value={bannerSettings.text}
          onChange={handleChange}
          placeholder="Enter banner text"
        />
      </label>
      <label>
        Background Color:
        <input
          type="color"
          name="bgColor"
          value={bannerSettings.bgColor}
          onChange={handleChange}
        />
      </label>
      <label>
        Text Color:
        <input
          type="color"
          name="textColor"
          value={bannerSettings.textColor}
          onChange={handleChange}
        />
      </label>
      <label>
        Banner Width (px):
        <input
          type="number"
          name="width"
          value={bannerSettings.width}
          onChange={handleChange}
        />
      </label>
      <label>
        Banner Height (px):
        <input
          type="number"
          name="height"
          value={bannerSettings.height}
          onChange={handleChange}
        />
      </label>
      <label>
        Upload Banner Image:
        <input
          type="file"
          name="image"
          onChange={handleImageUpload}
          accept="image/*"
        />
      </label>
    </div>
  );
};

export default BannerEditor;
