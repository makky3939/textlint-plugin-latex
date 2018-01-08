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

  processor(ext) {
    return {
      preProcess(text, filePath) {
        const plainText = text.replace(/{.*?}/g, "").replace(/\\/g, "");
        return parse(plainText);
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
