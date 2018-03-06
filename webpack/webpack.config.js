const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin= require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
    //入口文件的配置项
    entry:{
        entry: './src/entry.js'
    },
    //出口文件的配置项
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module:{
        rules:[
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
               test:'/\.(js|jsx)$/',
               use:{
                   loader:'babel-loader'
               },
               exclude:/node_module/ 
            },
            {
               test:/\.(png|jpg|gif)/ ,
               use:[{
                   loader:'url-loader',
                   options:{
                       limit:2000,
                       outputPath:'../images/'
                   }
               }]
            }
            
        ]
    },
    //插件，用于生产模版和各项功能
    plugins:[
        new uglify(),
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
           
        }),
        new extractTextPlugin("./css/index.css")
    ],
    //配置webpack开发服务功能
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        host: 'localhost',
        compress: true,
        port: 1717
    }
}