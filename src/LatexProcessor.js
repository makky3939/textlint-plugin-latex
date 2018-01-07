"use strict";

import { latexParser } from "latex-parser";

import MarkDownIt from "markdown-it";
import markdownItLatex from "markdown-it-latex";
import { parse } from "markdown-to-ast";

const mdi = new MarkDownIt();
mdi.use(markdownItLatex);

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
        const res = mdi.render(text);
        // TODO: tokens to ast TxtNode
        console.log(res);
        return parse(res);
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
