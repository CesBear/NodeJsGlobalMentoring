import csv from 'csvtojson';
import { createReadStream, createWriteStream } from 'fs';

const readStream = createReadStream('./data/csv/nodejs-hw1-ex1.csv')
const writterStream = createWriteStream('./data/outputFiles/output.txt');

readStream.pipe(csv())
.on('data', function (row) {
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