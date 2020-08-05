const csv = require("csvtojson");
const fs = require("fs");
const writer = fs.createWriteStream("./src/Task2/output.txt");

fs.createReadStream("./src/Task2/csv/nodejs-hw1-ex1.csv")
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