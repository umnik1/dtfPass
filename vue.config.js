const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options"];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.js`,
    template: "public/index.html",
    filename: `${name}.html`
  };
});

const plugins =
  process.env.NODE_ENV === "production"
    ? [
        {
          from: path.resolve("src/manifest.production.json"),
          to: `${path.resolve("dist")}/manifest.json`
        },
        {
          from: path.resolve("src/content/libs/"),
          to: `${path.resolve("dist")}/js/`
        },
        {
          from: path.resolve("src/content/insert/"),
          to: `${path.resolve("dist")}/js/`
        },
        {
          from: path.resolve("src/assets/css/"),
          to: `${path.resolve("dist")}/css/`
        },
        {
          from: path.resolve("src/content/icons/"),
          to: `${path.resolve("dist")}/icons/`
        }
      ]
    : [
        {
          from: path.resolve("src/manifest.development.json"),
          to: `${path.resolve("dist")}/manifest.json`
        },
        {
          from: path.resolve("src/content/libs/"),
          to: `${path.resolve("dist")}/js/`
        },
        {
          from: path.resolve("src/content/insert/"),
          to: `${path.resolve("dist")}/js/`
        },
        {
          from: path.resolve("src/assets/css/"),
          to: `${path.resolve("dist")}/css/`
        },
        {
          from: path.resolve("src/content/icons/"),
          to: `${path.resolve("dist")}/icons/`
        }
      ];

module.exports = {
  pages: pagesObj,
  // // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  configureWebpack: {
    entry: {
      content: "./src/content/index.js"
    },
    output: {
      filename: "js/[name].js"
    },
    plugins: [CopyWebpackPlugin(plugins)]
  },
  css: {
    extract: {
      filename: "css/[name].css"
      // chunkFilename: 'css/[name].css'
    }
  },

  chainWebpack: config => {
    // 查看打包组件大小情况
    if (process.env.npm_config_report) {
      // 在运行命令中添加 --report参数运行， 如：npm run build --report
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  }
};
