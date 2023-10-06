import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildOptions, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode = env.mode || BuildMode.DEVELOPMENT;
  const isDev = mode === BuildMode.DEVELOPMENT;
  const port = env.port || 3000;
  const paths: BuildPaths = {
    entrySrc: path.resolve(__dirname, 'src', 'index.tsx'),
    outputSrc: path.resolve(__dirname, 'build'),
    htmlTemplateSrc: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const webpackOptions: BuildOptions = {
    mode,
    paths,
    isDev,
    port,
  };

  return buildWebpackConfig(webpackOptions);
};
