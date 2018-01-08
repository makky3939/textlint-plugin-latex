"use strict";
import fs from "fs";
import path from "path";

import assert from "power-assert";
import { TextLintCore } from "textlint";
import PresetJaTechnicalWriting from "textlint-rule-preset-ja-technical-writing";

import LatexPlugin from "../src/index";

const { latexToPlainText } = LatexPlugin.Processor;
describe("LatexProcessor", () => {
  context("latexToPlainText", () => {
    it("should convert correctly", () => {
      const fixturePath = path.join(__dirname, "/sample.tex");
      const text = fs.readFileSync(fixturePath, "utf8");

      const res = latexToPlainText(text);
      assert(
        res ===
          `[a4j,12pt]「jreport」
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
`
      );
    });
  });
});
