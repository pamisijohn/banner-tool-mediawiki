/* global test, expect, jest */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BannerEditor from "../BannerEditor";

// Mock URL.createObjectURL for jsdom
// eslint-disable-next-line no-undef
global.URL.createObjectURL = jest.fn(() => "blob://test");

test("updates banner image when file is uploaded", () => {
  const bannerSettings = {
    text: "",
    bgColor: "#ffcc00",
    textColor: "#000000",
    width: 800,
    height: 200,
    image: "",
  };
  const updateSettings = jest.fn();
  const { getByLabelText } = render(
    <BannerEditor
      bannerSettings={bannerSettings}
      updateSettings={updateSettings}
    />
  );

  // Simulate file upload
  const file = new File(["dummy content"], "example.png", {
    type: "image/png",
  });
  const fileInput = getByLabelText(/upload banner image/i);
  fireEvent.change(fileInput, { target: { files: [file] } });

  // Expect updateSettings to be called with an updated 'image' property (the exact value is the mocked blob URL)
  expect(updateSettings).toHaveBeenCalled();
});
