"use strict";

import { latexParser } from "latex-parser";

import pandoc from "node-pandoc";
import { parse } from "markdown-to-ast";

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
        const res = pandoc(text, "-f markdown -t latex");
        // TODO: tokens to ast TxtNode
        console.log(res);
        return res;
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
