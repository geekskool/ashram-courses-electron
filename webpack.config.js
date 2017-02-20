const webpack = require('webpack')


module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './public/entry.js']
    },


output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
},

devServer: {
    contentBase: './public',
     publicPath: 'http://localhost:8080/built/'
},
  resolve: {
    root: __dirname,
    alias: {
      AppStyle: 'public/css/style.css'
    }
    },
module: {
    loaders:[
        {
            loader:'babel',
            test:/\.jsx?/,
            exclude:/node_module/
        },
    {
        test: /\.js?/,
        loader:'babel-loader',
        exclude: /node_module/
    }
    ]
},
plugins:[
    new webpack.HotModuleReplacementPlugin()
    ],
    target: "electron"
}