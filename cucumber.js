module.exports = {
  default: [
    "features/**/*.feature",
    // "--require-module", "esm",
    "--require", "features/step-definitions/*.js",
    "--require", "features/support/*.js",
    "--format", "html:reports/report.html"
  ].join(" ")
};