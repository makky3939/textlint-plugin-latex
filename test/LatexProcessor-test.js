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
    it("should ignore newline", () => {
      return textlint
        .lintText(
          `こんにちは。
こんばんは。\\`,
          ".tex"
        )
        .then(results => {
          assert(results.messages.length === 0);
        });
    });
  });
});

describe("LatexProcessor", () => {
  context("latexToPlainText", () => {
    it("should remove command", () => {
      const text = `
\section{セクション名}
句点がない文章
`;
      const res = latexToPlainText(text);
      assert(
        res ===
          `
\section
句点がない文章
`
      );
    });
  });
});
