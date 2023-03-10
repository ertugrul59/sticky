import fs from "fs";
import readline from "readline";

const add = async (callback) => {
  // Try to create a readable stream from the file, and handle any errors
  try {
    // Read file name from command line argument
    const fileName = process.argv[2];

    if (!fileName) throw new Error("File is not exist");

    const readStream = fs.createReadStream(fileName);

    // Create a readline interface to read the file in chunks
    const readInterface = readline.createInterface({
      input: readStream,
      console: false,
    });

    let sum = 0;

    // Process each line of the file in a chunk
    readInterface.on("line", (line) => {
      // Parse each line as a number and add it to the total sum
      const number = Number(line);
      if (!isNaN(number)) {
        sum += number;
      } else {
        console.log("This line is not formatted correctly:", line);
      }
    });

    // When the entire file has been processed, output the total sum
    readInterface.on("close", () => {
      if (sum === 0) {
        callback("Please provide apporiate format");
      } else {
        callback(sum);
      }
    });
  } catch (err) {
    console.error(`Failed to read file: ${err}`);
    process.exit(1);
  }
};

if (process.argv[1].indexOf("add.js") > -1) {
  add((sum) => {
    console.log("The sum is:", sum);
  });
}

export default add;
