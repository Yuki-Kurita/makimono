module.exports = {
  // 整形を効かせたいファイルなので除外を解除
  ignorePatterns: ["!.eslintrc.js", "!.babelrc.js"],
  extends: ["next", "next/core-web-vitals", "prettier"],
  // rules: {
  //   // 必要に応じてルールを追加
  //   "react/prop-types": "off",
  //   "react/react-in-jsx-scope": "off",
  //   "@typescript-eslint/no-explicit-any": "off",
  // },
};
