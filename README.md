# Next.js でブログを作成する

## プロジェクト作成

```bash
npx create-next-app next-myblog --typescript

cd next-myblog
```

## Git

一度.git ファイルを削除し、新たに初期化する

```bash
rm -rf .git
```

```bash
git init
git checkout -b main
git add .
git commit -m 'first-commit'
```

## 開発サーバーの立ち上げ

```bash
npm run dev
```

## tsconfig.json に baseUrl を追加

compilerOptions の中に以下を追加

```json
{
  "compilerOptions": {
    "baseUrl": "src"
    // 省略
  }
  // 省略
}
```

## src ディレクトリ以下を lint にかける

packege.json の lint を以下に変更
こうすることで src ディレクトリ以下を lint にかけることができる

```json
"lint": "next lint --dir src"
```

## src ディレクトリを作成

- pages
- styles
- components

など、lint にかけたいファイルを src ディレクトリの中に入れておく

## コードの整形

package.json の lint の下に以下を追記

```json
"lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix"
```

src 以下の.js,.jsx,.ts,.tsx ファイルを整形対象にする

### .eslointrc.json にルールを追加

```json
"rules": {
    // セミコロンない場合、エラー出力
    "semi": ["error", "always"]
  }
```

独自のルールを設定する場合に使用する
基本的には prettier で設定するので上記は削除して構わない

## package.json に prettier の設定を記述

```json
  "prettier": {
    "trailingComma": "all",// 末尾のカンマあり
    "tabWidth": 2,// tab の長さは半角スペース 2 つ
    "semi": true,// セミコロンあり
    "singleQuote": true,// シングルクォーテーションに統一
    "jsxSingleQuote": true,//jsx もシングルクォーテーションに統一
    "printWidth": 100 // １ 行の最大文字数 100
  },
```

.prettierrc ファイルを作成し、ルールを追加してもいいが、省ファイルのため package.json
ファイルに記述する

### パッケージのインストール

```bash
npm install -D prettier eslint-config-prettier
```

- prettier: 各ファイルをコマンドで、フォーマットできるようにするた
- eslint-config-prettier: ESLint と Prettier のコード整形がバッティングしないようするため

### .eslintrc を書き換え

```json
{
  "extends": ["next", "next/core-web-vitals", "prettier"]
}
```

### package.json に script を追加

```json
// --write: フォーマット整形
// --ignore-path .gitignore: .gitignore に含まれているファイルはコード整形の対象外
// 対象ファイルの拡張子を指定
"format": "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json,css}'"
```

## vscode の保存時に整形を実行

settings.json ファイルに以下を記述する
ワークスペースの settings.json に記述する

```json
 // デフォルトのフォーマッタを prettier に設定
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // ファイル保存時、prettier による自動フォーマット
  "editor.formatOnSave": true,
  // ファイル保存時、ESLint による自動フォーマット
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
```

### おまけ モジュールのインポート順をアルファベット順にする

.eslintrc ファイルを編集

```json
{
  "extends": [
    "next",
    "next/core-web-vitals",
    "prettier",
    // 追記
    "plugin:import/recommended",
    "plugin:import/warnings"
  ],
  "rules": {
    // import の順番をルール化
    // 参考：https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc"
        }
      }
    ]
  }
}
```

## microCMS の設定

ブログの投稿は microCMS で管理する
[microCMS 公式](https://microcms.io/)

### APIkey の設定

ルートに.env.development.local ファイルを作成
その中に APIkey をかく

```
API_KEY=xxxxxxxxxxxxxxxxxxx
```

APYkey の場所は microCMS の管理画面 → 設定から確認できる
