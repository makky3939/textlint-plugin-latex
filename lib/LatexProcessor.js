"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

var _txtToAst = require("txt-to-ast");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function LatexProcessor(config) {
    _classCallCheck(this, LatexProcessor);

    this.config = config;
  }

  _createClass(LatexProcessor, [{
    key: "processor",
    value: function processor(ext) {
      return {
        preProcess: function preProcess(text, filePath) {
          return (0, _txtToAst.parse)(LatexProcessor.latexToPlainText(text));
        },
        postProcess: function postProcess(messages, filePath) {
          return {
            messages: messages,
            filePath: filePath ? filePath : "<latex>"
          };
        }
      };
    }
  }], [{
    key: "availableExtensions",
    value: function availableExtensions() {
      return [".tex"];
    }
  }, {
    key: "latexToPlainText",
    value: function latexToPlainText(text) {
      return text.replace(/\\\w+ */g, "").replace(/{+}+/g, "").replace(/{+(.*?)}+/g, "「$1」").replace(/^%[^\n]*/g, "").replace(/\n%[^\n]*/g, "\n").replace(/([^\\])%[^\n]*/g, "$1").replace(/\\%/g, "%").replace(/ *\n */g, "\n");
    }
  }]);

  return LatexProcessor;
}();
//# sourceMappingURL=LatexProcessor.js.map