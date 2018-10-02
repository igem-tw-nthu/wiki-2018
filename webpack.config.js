var path = require('path')
require("@babel/polyfill");
const CircularDependencyPlugin = require('circular-dependency-plugin')


module.exports = {
    // the file your want to pack
    entry: {
        index: ['@babel/polyfill','./assets/js/index.js']
    },
    // webpack4 
    // mode: 'development'
    // mode: 'production' will auto uglify the output file
    mode: 'development',
    // your bundle file dicectory and filename
    output: {
        path: path.resolve('./assets/bundles/'), 
        filename: '[name].bundle.js', 
    },
    resolve: {
        alias:{
            Constant: path.resolve('./assets/js/component/Constant'),
        },
        modules: [path.resolve(),'node_modules']
    },
    module: {
        rules: [
            //a regexp that tells webpack use the following loaders on all 
            //.js and .jsx files
            {   test: /\.(js|jsx)$/,   
                //we definitely don't want babel to transpile all the files in 
                //node_modules. That would take a long time.
                exclude: /node_modules/, 
                //use the babel loader 
                use: {
                    loader: 'babel-loader', 
                    //specify that we will be dealing with React code
                    options:{
                        presets: ['env','react'],
                        // plugin for decorator
                        // in the future babel >= 7.x use @babel/plugin-proposal-decorators
                        plugins: [  
                            "transform-decorators-legacy",
                            "transform-class-properties",
                            "transform-object-rest-spread"
                        ]
                    }
                }
            }
        ]
    },
    plugins:[
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // allow import cycles that include an asyncronous import,
            // e.g. via import(/* webpackMode: "weak" */ './file.js')
            allowAsyncCycles: false,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
        })
    ]
   
}