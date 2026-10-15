const { readFile, writeFile } = require("fs").promises;

// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const firstText = await readFile("./Path_Module/first.txt", "utf8");
    const second = await readFile("./Path_Module/second.txt", "utf8");
    await writeFile(
      "./Path_Module/result.txt",
      `This is awesome: ${firstText} ${second}`,
      { flag: "a" },
    );
    console.log(firstText, second);
  } catch (err) {
    console.log(err);
  }
};

start();
