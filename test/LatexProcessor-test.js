"use strict";
import assert from "power-assert";
import LatexPlugin from "../src/index";
import { TextLintCore } from "textlint";
import PresetJaTechnicalWriting from "textlint-rule-preset-ja-technical-writing";

import path from "path";
describe("LatexPlugin", function() {
  let textlint;
  beforeEach(function() {
    textlint = new TextLintCore();
    textlint.setupPlugins({ html: LatexPlugin });
    textlint.setupRules(Object.assign({}, PresetJaTechnicalWriting.rules));
  });
  context("when target file is a Tex", function() {
    it("should report error", function() {
      const fixturePath = path.join(__dirname, "/test.tex");
      return textlint.lintFile(fixturePath).then(results => {
        assert(results.messages.length === 2);
        assert(results.filePath === fixturePath);
      });
    });
  });
  context("when target is text", function() {
    it("should report error", function() {
      return textlint.lintText("こんにちは", ".tex").then(results => {
        assert(results.messages.length === 1);
        assert(results.filePath === "<latex>");
      });
    });
  });
});
