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
    const plainText = text.replace(/{.*?}/g, "").replace(/\\/g, "");
    return plainText;
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
