import React, { useState } from "react";
import BannerEditor from "./components/BannerEditor";
import BannerPreview from "./components/BannerPreview";
import CodeOutput from "./components/CodeOutput";
import "./App.css";

function App() {
  const [bannerSettings, setBannerSettings] = useState({
    text: "I enjoy open source!",
    bgColor: "#ffcc00",
    textColor: "#000000",
    width: 800,
    height: 200,
    image: "", // Initially, no image
  });

  const updateSettings = (newSettings) => {
    console.log("Updated banner settings:", newSettings); // Debug log
    setBannerSettings(newSettings);
  };

  return (
    <div className="container">
      <header>
        <h1>MediaWiki Banner Creator</h1>
      </header>
      <BannerEditor
        bannerSettings={bannerSettings}
        updateSettings={updateSettings}
      />
      <BannerPreview bannerSettings={bannerSettings} />
      <CodeOutput bannerSettings={bannerSettings} />
    </div>
  );
}

export default App;
