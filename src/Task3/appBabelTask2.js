const csv = require("csvtojson");
const fs = require("fs");
const writterStream = fs.createWriteStream("./data/outputFiles/output.txt");
const readStream = fs.createReadStream("./data/csv/nodejs-hw1-ex1.csv")


readStream.pipe(csv())
  .on("data", function (row) {
    writterStream.write(row);
  })
  .on("error", function (error) {
    console.log("An error occurred: ", error);
  })
  .then(() => {
    console.log('Data file output updated successfully');
  })
  .catch((err)=>{
    console.log(err.message);
  });