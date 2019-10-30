module.exports = {
  "extends": "./index.js",
  "parser": "@typescript-eslint/parser",
  "parserOptions":  {
    "ecmaVersion":  2018,
    "sourceType":  "module",
    "ecmaFeatures":  {
      "jsx":  true
    }
  },
  "rules": {
    "@typescript-eslint/no-unused-vars": "off",
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ]
}
