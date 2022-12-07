module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  ignorePatterns: [
    './fithub_mongodb/client/src/pages/images/cap.png'
  ],
  rules: {
    "semi": [ "error", "never" ]
  }
}
