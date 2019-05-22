// require('@babel/core');
// require("@babel/register")({
//     ignore: [],
//     //only: [ /node_modules/ ]
// });
// //require("@babel/polyfill");

require("babel-core/register");
require("babel-polyfill");

module.exports = require('algosdk');