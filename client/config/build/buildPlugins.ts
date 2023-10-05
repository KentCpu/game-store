import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export const  buildPlugins = (): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ]
}
