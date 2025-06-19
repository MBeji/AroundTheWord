module.exports = {
  extends: [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    // "next/typescript", // Add this if you're using TypeScript
    "plugin:jest/recommended",
  ],
  rules: {
    // You can add custom rules here if needed
  },
  env: {
    jest: true,
    node: true, // Added node environment for globalThis and other Node.js globals
    es2021: true, // Added for modern ES features
  },
};
