const fs = require("fs");

const dir_name = "example_dir";

const files = fs.readdirSync(dir_name);

files.forEach((item) => {
  console.log(item);
});
