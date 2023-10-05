import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const  buildPlugins = (htmlTemplateSrc: string): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: htmlTemplateSrc
        }),
        new webpack.ProgressPlugin(),
    ]
}
