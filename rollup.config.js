import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "umd",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [terser()],
  },
];
