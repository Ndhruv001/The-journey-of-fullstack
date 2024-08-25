export default {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Integrates Prettier with ESLint
  ],
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error", // Show prettier errors as ESLint errors
  },
};
