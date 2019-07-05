## Webpack4 + babel7 + React sample

Webpack4 + babel7 + React を動作させるサンプル

## HOW TO RUN

以下を実行

### Devサーバー

```bash
$ ./node_modules/.bin/webpack-dev-server
or
$ yarn run start
```

`http://localhost:8080` にアクセス

### ビルド

```bash
$ yarn run webpack
or
$ yarn run build
```

index.htmlを開く

## 導入時メモ

### yarn導入

```bash
$ brew install yarn
```

### package.jsonの作成

```bash
$ yarn init -y
```

### Webpack導入

```bash
$ yarn add webpack webpack-cli --dev
```

### webpack-dev-server導入

```bash
$ yarn add webpack-dev-server --dev
```

### babel導入

```bash
$ yarn add @babel/core @babel/preset-env babel-loader --dev
```

### React導入

```bash
$ yarn add react react-dom
$ yarn add @babel/preset-react --dev
```

### .gitignore追加

```bash
$ echo node_modules > .gitignore
```

### 設定・関連ファイルの準備

webpack.config.js の準備。

```bash
$ touch webpack.config.js # write code...
```

jsファイルの準備。

```bash
$ mkdir src
$ touch src/index.js # write code...
$ touch src/sub-component.js # write code...
```

## 参考

最新版で学ぶwebpack 4入門 - Babel 7でES2019環境の構築（React, Vue, Three.js, jQueryのサンプル付き） - ICS MEDIA https://ics.media/entry/16028/

## AUTHOR

[okutani](https://okutani.net/)
