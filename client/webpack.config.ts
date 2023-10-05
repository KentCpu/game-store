import path from 'path';

import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildMode, BuildOptions} from "./config/build/types/config";

const mode = BuildMode.DEVELOPMENT

const webpackOptions: BuildOptions = {
    mode,
    paths: {
        entrySrc: path.resolve(__dirname, 'src', 'index.ts'),
        outputSrc: path.resolve(__dirname, 'build'),
        htmlTemplateSrc: path.resolve(__dirname, 'public', 'index.html')
    },
    isDev: mode === BuildMode.DEVELOPMENT
}

const config: webpack.Configuration = buildWebpackConfig(webpackOptions)

export default config
