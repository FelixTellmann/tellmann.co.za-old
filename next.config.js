const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');
const fs = require('fs');

module.exports = withSass(withCSS({
  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
          test: /\.(png|eot|otf|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
          },
        },
        {
          loader: 'sass-loader',
          test: /.scss$/,
          options: {
            sassOptions: {
              outputStyle: 'expanded',
              sourceMap: true,
            },
          },
        },
        {
          enforce: 'pre',
          test: /.scss$/,
          loader: 'sass-resources-loader',
          options: {
            resources: fs.readdirSync(path.join(process.cwd(), 'styles')).filter(file => file.match(/^_.*\.scss$/)).map(file => './styles/' + file),
          },
        });
    config.resolve.extensions = [".ts", ".js", ".jsx", ".tsx", ".svg"];
    return config;
  },
}));