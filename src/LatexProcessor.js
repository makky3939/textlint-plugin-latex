"use strict";

import util from "util";

import { parse } from "txt-to-ast";

module.exports = class LatexProcessor {
  constructor(config) {
    this.config = config;
  }

  static availableExtensions() {
    return [".tex"];
  }

  static latexToPlainText(text) {
    return text
      .replace(/\\\w+ */g, "")
      .replace(/{+}+/g, "")
      .replace(/{+(.*?)}+/g, "「$1」")
      .replace(/^%[^\n]*/g, "")
      .replace(/\n%[^\n]*/g, "\n")
      .replace(/([^\\])%[^\n]*/g, "$1")
      .replace(/\\%/g, "%")
      .replace(/ *\n */g, "\n");
  }

  processor(ext) {
    return {
      preProcess(text, filePath) {
        return parse(LatexProcessor.latexToPlainText(text));
      },
      postProcess(messages, filePath) {
        return {
          messages,
          filePath: filePath ? filePath : "<latex>"
        };
      }
    };
  }
};
