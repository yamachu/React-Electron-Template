const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const output_path = "dist";

module.exports = function (env, argv) {
    return [
        {
            target: "electron-main",
            entry: "./src/main.ts",
            output: {
                path: path.resolve(__dirname, output_path),
                filename: "main.js"
            },
            node: {
                __dirname: false,
                __filename: false,
            },
            resolve: {
                extensions: [".ts"]
            },
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        exclude: /node_modules/,
                        use: [
                            "ts-loader"
                        ]
                    }
                ]
            }
        },
        {
            target: "electron-renderer",
            entry: "./src/renderer/main.ts",
            output: {
                path: path.resolve(__dirname, output_path),
                filename: "index.js"
            },
            resolve: {
                extensions: [".ts", ".tsx", ".js"]
            },
            devtool: (argv.mode === "production") ? false : "source-map",
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        exclude: /node_modules/,
                        use: [
                            "ts-loader"
                        ]
                    },
                    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    inject: false,
                    template: 'src/index.html'
                })
            ]
        }
    ]
};
