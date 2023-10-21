import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = ({ isDev, paths }: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.htmlTemplateSrc,
    }),
    new webpack.ProgressPlugin(),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
};
