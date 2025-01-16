import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.ts", // 라이브러리의 진입점
  output: [
    {
      file: "dist/bundle.esm.js", // ESM 형태로 빌드 결과
      format: "es",
    },
    {
      file: "dist/bundle.cjs.js", // CommonJS 형태로 빌드 결과
      format: "cjs",
    },
  ],
  plugins: [
    PeerDepsExternalPlugin(),
    resolve(),
    commonjs(),
    typescript(),
    terser(),
  ], // 플러그인 설정
};
