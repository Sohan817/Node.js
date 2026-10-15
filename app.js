const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const start = async () => {
  try {
    const firstText = await getText("./Path_Module/first.txt");
    const second = await getText("./Path_Module/second.txt");
    console.log(firstText, second);
  } catch (err) {
    console.log(err);
  }
};

start();

// getText("./Path_Module/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
