"use strict";
import assert from "power-assert";
import LatexPlugin from "../src/index";
import { TextLintCore } from "textlint";
import PresetJaTechnicalWriting from "textlint-rule-preset-ja-technical-writing";

import path from "path";

const { latexToPlainText } = LatexPlugin.Processor;
describe("LatexPlugin", () => {
  let textlint;
  beforeEach(() => {
    textlint = new TextLintCore();
    textlint.setupPlugins({ html: LatexPlugin });
    textlint.setupRules(Object.assign({}, PresetJaTechnicalWriting.rules));
  });
  context("when target file is a Tex", () => {
    it("should report error", () => {
      const fixturePath = path.join(__dirname, "/test.tex");
      return textlint.lintFile(fixturePath).then(results => {
        assert(results.messages.length === 1);
        assert(results.filePath === fixturePath);
      });
    });
  });
  context("when target is text", () => {
    it("should report error", () => {
      return textlint.lintText("こんにちは", ".tex").then(results => {
        assert(results.messages.length === 1);
        assert(results.filePath === "<latex>");
      });
    });
  });
});

describe("LatexProcessor", () => {
  context("latexToPlainText", () => {
    it("should replace command", () => {
      const text = `
\\section{セクション名}
文章\\underline{強調}文章\\underline{強調}文章。
\\renewcommand{\\bibname}{参考文献}
{\\huge{\\bf 学外発表}}
`;
      const res = latexToPlainText(text);
      assert(
        res ===
          `
「セクション名」
文章「強調」文章「強調」文章。
「参考文献」
「学外発表」
`
      );
    });
    it("should remove space", () => {
      const text = `
 \\huge{こんにちは。}
   hello
`;
      const res = latexToPlainText(text);
      assert(
        res ===
          `
「こんにちは。」
hello
`
      );
    });
    it("should remove commentout", () => {
      const text = `
Hello % Yo %
80\\%果汁
% Hello
`;
      const res = latexToPlainText(text);
      assert(
        res ===
          `
Hello
80%果汁

`
      );
    });
  });
});
