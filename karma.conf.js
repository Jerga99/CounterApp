var webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
    config.set({
        hostname: process.env.IP,
        port: process.env.PORT,
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};