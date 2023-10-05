import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";


export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths} = options;

    return {
        mode,
        entry: paths.entrySrc,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.outputSrc,
            clean: true,
        },
        plugins: buildPlugins(paths.htmlTemplateSrc),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}
