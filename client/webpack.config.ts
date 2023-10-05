import path from 'path';

import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildOptions} from "./config/build/types/config";

export default (env: BuildEnv) => {
    const mode = env.mode
    const port = env.port || 3000


    const webpackOptions: BuildOptions = {
        mode,
        paths: {
            entrySrc: path.resolve(__dirname, 'src', 'index.ts'),
            outputSrc: path.resolve(__dirname, 'build'),
            htmlTemplateSrc: path.resolve(__dirname, 'public', 'index.html')
        },
        isDev: mode === BuildMode.DEVELOPMENT,
        port
    }

    return buildWebpackConfig(webpackOptions)
}
