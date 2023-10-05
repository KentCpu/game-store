import {BuildOptions} from "./types/config";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (options: BuildOptions) : WebpackDevServerConfiguration  => {
    return {
        port: options.port,
        open: true,
    }
}
