const { readFile, writeFile } = require("fs");

console.log("Start");

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //console.log(result);

  const first = result;

  readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    //console.log(result);

    const second = result;

    writeFile(
      "./content/subfolder/result-async.txt",
      "Asynchronos values " + first + "," + second,
      "utf-8",
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("done");
      }
    );
  });
});

console.log("start next file");
