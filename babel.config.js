module.exports = {
  presets: [
    ["@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "debug": true
      }
    ]
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import"
  ]
};