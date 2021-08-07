import { defineConfig } from 'dumi';

let BaseUrl = '/dumi-ui';

export default defineConfig({
  title: 'dumi-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  base: BaseUrl,
  publicPath: BaseUrl + '/',
  lessLoader: {
    module: {
      rules: [
        {
          test: /\.less$/i,
          loader: ['style-loader', 'css-loader', 'less-loader'],
        },
      ],
    },
  },
  /*  exportStatic: {
    htmlSuffix: true,
  }, */
});
