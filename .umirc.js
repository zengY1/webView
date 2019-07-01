import { resolve } from 'path'
export default {
  history: 'hash',
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
    }],
  ],
  "proxy": {
    "/api": {                                       
      "target": "http://106.14.51.152:7070/", 
      "changeOrigin": true,                         
      "pathRewrite": { "^/api" : "" }               
    }
  },
  // devtool:'source-map',
  alias: {
    api: resolve(__dirname, './src/services/'),
    components: resolve(__dirname, './src/components'),
    public: resolve(__dirname, './public'),
    utils: resolve(__dirname, './src/utils'),
  },
};
