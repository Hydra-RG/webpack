const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
module.exports = {
    entry :{
main : "./src/main.js"

    },
    mode : "development",
    output : {
        filename : "[name]-bundle.js",
        path: path.resolve(__dirname,"../dist"),
        publicPath: "/"

    },
    devServer: {
         port:  8080,
         static: "dist", /* give  the root of the bundle js file*/
       
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false
                        }
                    }
                ] 
                
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].html",
                            
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "html-loader",
                        options: {
                            esModule: false
                        }
                    }
                ]
            }
        ]
    }
    
}