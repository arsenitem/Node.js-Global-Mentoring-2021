import csv from "csvtojson"
import fs from "fs"
import { pipeline } from "stream";

let csvFilePath = './csv/nodejs-hw1-ex1.csv';
let txtFilePath = './output.txt';

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(txtFilePath);
pipeline(
    readStream,
    csv({checkType: true}),
    writeStream,
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    }
)