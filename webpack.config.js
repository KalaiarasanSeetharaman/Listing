var webpack = require('webpack');
const path = require('path');


module.exports = {
     entry: [
      'script-loader!jquery/dist/jquery.min.js',
      './app/app.jsx'
    ],
    externals:{
      jquery:'jQuery'
    },
    plugins:[
      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery',
          'Popper': 'popper.js'
        })
    ],
    output: {
       path: __dirname,
       filename: './public/bundle.js'
    },
    resolve: {
      alias: {
       "Main":path.resolve(__dirname, "app/components/layout/Main.jsx"),
       "Login":path.resolve(__dirname, "app/components/User/Login.jsx"),
       "ListComponent":path.resolve(__dirname, "app/components/Listcomponent.jsx"),
       "actions": path.resolve(__dirname, "app/actions/lists.jsx"),
       "reducers": path.resolve(__dirname, "app/reducers/lists.jsx"),
       "configureStore": path.resolve(__dirname, "app/store/configureStore.jsx"),
       "api": path.resolve(__dirname, "app/api/v1/list.jsx"),
       "mainstyle": path.resolve(__dirname, "app/styles/style.css"),
       'DeleteButton':path.resolve(__dirname, "app/components/Delete.jsx"),
     },
      extensions: ['*', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins:['transform-decorators-legacy']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        },
        { test: /\.css$/, exclude: /(node_modules|bower_components)/, loader: "style-loader!css-loader" },
        {test: /\.(scss|css)$/, include: /node_modules/, loaders: [  'style-loader', 'css-loader', 'sass-loader' ]},
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&name=[name].[ext]',
        }, {
            test: /\.(wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
        },

      ]
    },

  devtool:'cheap-module-eval-source-map'
};
