const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig =require("./webpack.base");

const proConfig = {
    mode:"production",
}

module.exports = merge(baseConfig,proConfig)