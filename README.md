# textlint-plugin-latex [![Build Status](https://travis-ci.org/elzup/textlint-plugin-latex.svg?branch=master)](https://travis-ci.org/elzup/textlint-plugin-latex)

Latex plugin for [textlint](https://github.com/textlint/textlint &#34;textlint&#34;).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-plugin-latex

## Usage

This plugin is built-in support on textlint.

---

No need configuration.

Manually add latex plugin to do following:

```
{
    "plugins": [
        "latex"
    ]
}
```

## Changelog

See [Releases page](https://github.com/elzup/textlint-plugin-latex/releases).



## Convert method
1. Convert LaTeX to plain text
2. txt-to-ast

**From** (Official Sample text)

https://github.com/elzup/textlint-plugin-latex/blob/master/test/sample.tex

**To**

```
[a4j,12pt]「jreport」
「  動作確認テスト・サンプルファイル」
「情報リテラシTA」

「document」



「の世界にようこそ！」

「インストール成功！」
の世界にようこそ！この文章が「dviout」というソフトで閲覧できていれば、
インストールに成功しています。

（ラテフ）もしくは（テフ）は、
組版処理を行うソフトウェアです。
数学者・コンピュータ科学者のドナルド・クヌース氏によって作られました。

このソフトを使うと、きれいな文章の作成ができます。実際に出版の現場でも使われているそうです。
数学者が作ったということもあって、特に数式の出力がきれいにできるのが特徴です。
「eqnarray」
& _「x 1」 ( 「2」「x-1」 - 「x+5」「x^3 -1」 )\\; ,\\;
& ^_0 ^2 (x)dx
「eqnarray」
2つの数式が、きちんと表示されていますか？
複雑な数式が入った文章も、きれいに出力することができます。



「基本手順」

では、で文章を作る際の、基本的な手順をここに示します。


「enumerate」
ソースファイルをTeraPadなどのエディタで作成する。

ソース（素）となるファイルを作成します。これにはエディタと呼ばれるソフトを使います。
この地点では文章の形にはなっていません。

ソースファイルをコンパイルして、dviファイルを作成する。

パソコンに変換を命令して、先ほどつくったソースファイル
をdviファイルに変換、文章の形にして確認します。

dviファイルができたことを確認したら、PDFに変換する。

dvi形式は、あまり一般的ではありません。
そこで、Adobe Readerなどで閲覧ができるPDF形式に変換します。


「enumerate」


「document」
```


## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/textlint/textlint/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT © elzup
