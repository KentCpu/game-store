import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;

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
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  };
};
