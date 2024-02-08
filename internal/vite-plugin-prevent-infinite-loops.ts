import * as babel from "@babel/core";
import babelPlugin from "./babel-plugin-prevent-infinite-loops";
import path from "path";

const jsSources = [".js", ".ts", ".vue"];
export function preventInfiniteLoopsVitePlugin() {
  let projectRoot = process.cwd();
  return {
    name: "prevent-infinite-loops",
    configResolved(config) {
      projectRoot = config.root;
    },
    async transform(code, id) {
      const [filepath] = id.split("?");
      if (jsSources.includes(path.extname(filepath)) && !id.endsWith(".css")) {
        const result = await babel.transformAsync(code, {
          root: projectRoot,
          filename: id,
          sourceFileName: filepath,
          parserOpts: {
            sourceType: "module",
            allowAwaitOutsideFunction: true,
          },
          plugins: [babelPlugin],
          sourceMaps: true,
        });
        if (result) {
          return { code: result.code, map: result.map };
        }
      }
    },
  };
}
