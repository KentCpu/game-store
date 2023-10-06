export enum BuildMode {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export interface BuildPaths {
  entrySrc: string;
  outputSrc: string;
  htmlTemplateSrc: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
