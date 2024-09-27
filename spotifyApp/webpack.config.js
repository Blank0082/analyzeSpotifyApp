const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  if (isDevelopment) {
    dotenv.config({ path: '.env.development' });
  } else {
    dotenv.config({ path: '.env.production' });
    dotenv.config({ path: '.env' });
  }

  const isHashRouter = process.env.REACT_APP_HASH_ROUTER === 'true' || false;
  if (isHashRouter) {
    REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI + '/#/callback';
  } else {
    REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI + '/callback';
  }

  console.log('isHashRouter:', isHashRouter);
  console.log('isDevelopment:', isDevelopment);
  console.log('REACT_APP_REDIRECT_URI:', REACT_APP_REDIRECT_URI);

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: process.env.PUBLIC_PATH || '/' // 根據環境設置 publicPath
    },
    mode: argv.mode, // 根據環境設置模式
    devServer: {
      static: path.join(__dirname, 'public'),
      port: 3000,
      open: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }]
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: '404.html'
      }),
      new webpack.DefinePlugin({
        'process.env.REACT_APP_HASH_ROUTER': JSON.stringify(isHashRouter),
        'process.env.REACT_APP_BROWSER_ROUTER_BASENAME': JSON.stringify(process.env.REACT_APP_BROWSER_ROUTER_BASENAME || '/'),
        'process.env.REACT_APP_BACKEND_URI': JSON.stringify(process.env.REACT_APP_BACKEND_URI),
        'process.env.REACT_APP_REDIRECT_URI': JSON.stringify(REACT_APP_REDIRECT_URI),
        'process.env.REACT_APP_CLIENT_ID': JSON.stringify(process.env.REACT_APP_CLIENT_ID),
        'process.env.REACT_APP_SCOPE': JSON.stringify(process.env.REACT_APP_SCOPE),
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
};