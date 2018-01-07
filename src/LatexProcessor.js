"use strict";

import { latexParser } from "latex-parser";

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
        const res = latexParser.parse(text);
        // TODO: tokens to ast TxtNode
        console.log(res);
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
