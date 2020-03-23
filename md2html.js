const marked = require("marked");

// 与えられたオプションを元にMarkdown文字列をHTMLに変換する
module.exports = (markdown, cliOptions) => {
  return marked(markdown, {
    gfm: cliOptions.gfm,
  });
};
