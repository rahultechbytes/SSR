const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    mode: "development",

    target: 'node',                 // Inform webpack that we are building bundle for Node application

    entry: './src/index.js',        //telling the root file of our server application

    output: {                      //Tell webpack where to put the output files that is generated
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);