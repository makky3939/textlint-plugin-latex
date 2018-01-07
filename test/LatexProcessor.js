import assert from "power-assert";
import LatexProcessor from "../src/LatexProcessor";
import { TextLintCore } from "textlint";
import path from "path";
describe("LatexProcessor-test", function() {
  describe("LatexPlugin", function() {
    let textlint;
    context("when target file is a Latex", function() {
      beforeEach(function() {
        textlint = new TextLintCore();
        textlint.setupProcessors({
          LatexProcessor: LatexProcessor
        });
        textlint.setupRules({
          "no-todo": require("textlint-rule-no-todo")
        });
      });
      it("should report error", function() {
        const fixturePath = path.join(__dirname, "/fixtures/test.html");
        return textlint.lintFile(fixturePath).then(results => {
          assert(results.messages.length > 0);
          assert(results.filePath === fixturePath);
        });
      });
    });
    context("support file extensions", function() {
      beforeEach(function() {
        textlint = new TextLintCore();
        textlint.setupProcessors({
          LatexProcessor: LatexProcessor
        });
        textlint.setupRules({
          "no-todo": require("textlint-rule-no-todo")
        });
      });
      it("support {.html, .htm}", function() {
        const fixturePathList = [
          path.join(__dirname, "/fixtures/test.html"),
          path.join(__dirname, "/fixtures/test.htm")
        ];
        const promises = fixturePathList.map(filePath => {
          return textlint.lintFile(filePath).then(results => {
            assert(results.messages.length > 0);
            assert(results.filePath === filePath);
          });
        });
        return Promise.all(promises);
      });
    });
  });
});
