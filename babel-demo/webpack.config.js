import path from "path";
import TerserPlugin from "terser-webpack-plugin";


export default {
  mode: 'development',
  entry: "./fetch-sse.js", // 변환할 파일 경로
  output: {
    filename: "bundle.js", // 출력될 번들 파일명
    path: path.resolve(process.cwd(), "dist"), // 번들 파일이 저장될 디렉토리
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: "11", // IE11을 타겟으로 설정
                  },
                  useBuiltIns: "usage", // 필요한 polyfill만 포함
                  corejs: "3", // core-js 버전
                },
              ],
            ],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true, // 코드 압축 활성화
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // 모든 주석 제거
          },
        },
        extractComments: false, // 별도의 파일로 주석 추출하지 않음
      }),
    ],
  },

};