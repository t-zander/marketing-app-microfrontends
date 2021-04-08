const common = require("./webpack.common");

const prodConfig = {
  mode: "production",
};

merge(common, prodConfig);
