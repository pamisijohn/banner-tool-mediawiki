# MediaWiki Banner Creator

A simple web-based tool to help users create MediaWiki banners with ease. This project was built as part of the **Outreachy Round 30 application process** for the Wikimedia Foundation. The goal is to simplify the creation of banners that follow the CentralNotice format on Wikimedia projects.

With this app, you can design banners by adjusting text, colors, dimensions, and uploading an image, all with a live preview that updates instantly without reloading the page.

## Overview

MediaWiki Banner Creator enables Wikimedia community members to create customized banners that meet design and content standards. Whether you're advertising an event or highlighting important information, this tool helps you craft professional banners with ease.

## Features

- **Live Preview:** Instantly see the changes as you update the banner text, background, and other properties.
- **Image Upload:** Upload an image to incorporate into your banner. The tool uses a semi-transparent overlay to ensure your text remains legible.
- **Responsive Design:** Built using best practices, the tool adapts to different screen sizes for optimal viewing.
- **Code Generation:** Automatically generates the HTML snippet for your banner, ready for integration into MediaWiki pages.
- **Unit Tested:** Includes unit tests for key components using Jest and React Testing Library.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node Package Manager)

## 🔧 Technologies Used

- [React](https://reactjs.org/)
- HTML & CSS
- JavaScript (ES6+)
- [Vite](https://vitejs.dev/) (for fast development build)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) + Jest (for unit testing)

---

## 📦 Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone  https://github.com/pamisijohn/banner-tool-mediawiki.git
   cd banner-tool-mediawiki
   ```
