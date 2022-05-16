module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "linebreak-style": 0,
    "prefer-arrow-callback": "error",
    "react/function-component-definition": "off",
    "react/prop-types": "off",
    "react/button-has-type": "off",
    "react/jsx-filename-extension": [1, {
      extensions: [".js", ".jsx"],
    }],
    "no-else-return": [
      "error",
      {
        allowElseIf: true,
      },
    ],
    "max-len": ["error", { code: 120 }],
  },
}
