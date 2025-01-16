import resolve from "@rollup/plugin-node-resolve";
import clean from "rollup-plugin-cleaner";
import esbuild from "rollup-plugin-esbuild";
import rollupTypescript from "rollup-plugin-typescript2";

const plugins = [
  clean({ targets: ["./dist"] }),
  resolve({ extensions: [".ts", ".tsx"] }),
  rollupTypescript(),
  esbuild({ sourcemap: false }),
];
const external = /node_modules/;

const config = [
  {
    input: "components/index.ts",
    output: [
      {
        file: "dist/icons.esm.js",
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins,
    external,
  },
];

export default config;
