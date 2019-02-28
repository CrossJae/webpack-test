const path = require('path');

module.exports = {
    mode: 'development', //webpack4
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{ //写成对象的形式，便于扩展参数
                loader: 'style-loader', 
                options: {
                    insertAt: 'top', // css插到到顶部
                }
            }, 'css-loader'] // 有两个loader，因为每个loader的功能单一性，css-loader只是能解析到css文件，style-loader是将css代码插入到js中 
        }, { 
            test: /\.js$/,
            exclude: /node_modules/, // 排除node_modules
            loader: "babel-loader"
        }]
    }
}