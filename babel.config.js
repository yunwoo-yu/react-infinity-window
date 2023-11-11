module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3"
      }
    ],
    "@babel/preset-typescript",
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-flow"
  ]
}
