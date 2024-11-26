import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tailwind from "eslint-plugin-tailwindcss";
import tsParser from "@typescript-eslint/parser";

// import babelParser from "@babel/eslint-parser";
// import importPlugin from "eslint-plugin-import";
// import unusedImports from "eslint-plugin-unused-imports";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tailwind.configs["flat/recommended"],
    ],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-negative-arbitrary-values": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/migration-from-tailwind-2": "warn",
      "tailwindcss/no-arbitrary-value": "off",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/no-unnecessary-arbitrary-value": "warn",
    },
  }
  // importのフォーマット(動作しない)
  // {
  //   // 対象ファイルと環境
  //   files: ["**/*.{js,jsx,ts,tsx}"],
  //   languageOptions: {
  //     parser: babelParser, // Babelのパーサを指定
  //     ecmaVersion: 2021,
  //     sourceType: "module",
  //   },
  //   plugins: {
  //     import: importPlugin,
  //     "unused-imports": unusedImports,
  //   },
  //   rules: {
  //     // Import順序のルール
  //     "import/order": [
  //       "error",
  //       {
  //         groups: [
  //           "builtin", // 標準モジュール
  //           "external", // 外部ライブラリ
  //           "internal", // 内部モジュール
  //           "parent", // 親ディレクトリ
  //           "sibling", // 同じ階層のファイル
  //           "index", // インデックスファイル
  //         ],
  //         "newlines-between": "always", // グループ間に改行を挿入
  //         alphabetize: {
  //           order: "asc", // アルファベット順
  //           caseInsensitive: true, // 大文字小文字を区別しない
  //         },
  //         pathGroups: [
  //           {
  //             pattern: "react**", // React関連は先頭に配置
  //             group: "external",
  //             position: "before",
  //           },
  //         ],
  //         pathGroupsExcludedImportTypes: ["react"], // Reactをグループの一部から除外
  //       },
  //     ],
  //     // 未使用importを削除するルール
  //     "unused-imports/no-unused-imports": "warn",
  //   },
  // }
);
