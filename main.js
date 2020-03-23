const program = require("commander");
const fs = require("fs");
const marked = require("marked");

program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: true,
  ...program.opts(),
};

fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1); // 終了ステータス 1（一般的なエラー）
    return;
  }

  const html = marked(file, {
    gfm: cliOptions.gfm,
  });
  console.log(html);
});
