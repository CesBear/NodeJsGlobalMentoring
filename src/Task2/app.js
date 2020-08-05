const csv = require("csvtojson");
const fs = require("fs");
const writer = fs.createWriteStream("./data/outputFiles/output.txt");

fs.createReadStream("./data/csv/nodejs-hw1-ex1.csv")
  .pipe(csv())
  .on("data", function (row) {
    writer.write(row);
  })
  .on("error", function (error) {
    console.log("An error occurred: ", error);
  })
  .then(() => {
    console.log('File data output saved successfully');
  })