module.exports = {
  plugins: [
    [
      "@embroider/macros/src/babel/macros-babel-plugin",
      {
        mode: "compile-time",
      },
    ],
  ],
};
