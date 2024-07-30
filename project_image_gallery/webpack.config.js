const { default: zIndex } = require("@mui/material/styles/zIndex");

module.exports = {
  resolve: {
    fallback: { process: require.resolve('process/browser') },
    zIndex
  },
};
