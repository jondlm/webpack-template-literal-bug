module.exports = {
  mode: "production",
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    filename: "repro.min.js"
  }
};
