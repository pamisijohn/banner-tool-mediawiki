import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    // Override for Node-specific configuration files (like jest.config.js)
    files: ["jest.config.js", ".eslintrc.js"], // add other config files if needed
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "script", // using script mode for CommonJS files
      },
    },
  },
  {
    // General settings for other JavaScript/JSX files
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
