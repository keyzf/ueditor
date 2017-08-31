var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: {
  	app: './main.js'
  },
  output: {
    filename: './[name].js'
  },
  module: {
  	loaders: [
  		{
  			test: /\.(png|jpg)$/, 
				loader: 'url-loader?limit=8192'
			}, // 如果图片的大小小于8192比特，将编译成Data URl,否则，将会编译成普通的URl，问号(?)用来将参数传递到加载器中
  		{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},//CSS-loader用来阅读CSS文件，Style-loader来插入Style标签到HTML页面中。不同的加载器靠感叹号标记链接（！）
 		],
  },
  plugins: [
   	new webpack.ProvidePlugin({
      	$: "jquery",
      	jQuery: "jquery",
      	"window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({filename: 'index2.html', template: 'index2.html', hash: true}),
		//new HtmlWebpackPlugin({filename: 'js/detail.html', template: 'src/modules/app/detail/index.html', chunks: ['common', 'Detail'], hash: true})，
  	
		//new webpack.optimize.CommonsChunkPlugin('init'),
		
		new uglifyJsPlugin({
      compress: {
        warnings: false,
        dead_code: true
      }
    })
  ]
};
