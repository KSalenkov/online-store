const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
    devtool: "source-map",
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/",
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js'],
        fallback: {
            fs: false
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.svg$/,
                loader: "svg-react-loader",
            },
        ],
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "online-store",
            favicon: "./public/favicon.ico",
        }),
        new webpack.DefinePlugin(isDevelopment),
    ],
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
};
