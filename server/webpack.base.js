module.exports = {

    // Tell webpack to run Babel on every file it goes through.

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0',           //Use for performing some async actions.   
                        ['env', { targets: { browsers: ['last 2 versions'] } }]  //Latest browser support for latest two versions 
                    ]
                }
            }
        ]
    }
}