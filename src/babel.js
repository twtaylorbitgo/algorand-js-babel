require("babel-core/register");
require("babel-polyfill");

require("babel-core").transform("code", {
    plugins: ["syntax-trailing-function-commas", "syntax-async-functions"]
});

module.exports = require('./js-algorand-sdk/main');