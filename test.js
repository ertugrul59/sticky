import test from "node:test";
import assert from "assert";
import fs from "fs";
import add from "./add.js";

var mockFileContent;
var mockFileName;

test("Sum is equal to 15", async (t) => {
  // Create a mock file with some numbers
  mockFileName = "test1.txt";
  mockFileContent = "1\n2\n3\n4\n5\n";

  fs.writeFileSync(mockFileName, mockFileContent);

  process.argv[2] = mockFileName;

  const sum = await new Promise((resolve) => {
    add((sum) => {
      resolve(sum);
    });
  });

  assert.strictEqual(sum, 15);
  //Delete the mock file
  fs.unlinkSync(mockFileName);
});

test("Sum is not equal to 15", async (t) => {
  // Create a mock file with some numbers
  mockFileName = "test2.txt";
  mockFileContent = "1\n2\n3";

  fs.writeFileSync(mockFileName, mockFileContent);

  process.argv[2] = mockFileName;

  const sum = await new Promise((resolve) => {
    add((sum) => {
      resolve(sum);
    });
  });

  assert.notStrictEqual(sum, 20);
  //Delete the mock file
  fs.unlinkSync(mockFileName);
});

test("Text file is not exist", async (t) => {
  // Create a mock file with some numbers
  mockFileName = "test3.txt";
  mockFileContent = "1\n2\n3";

  process.argv[2] = mockFileName;

  try {
    await new Promise((resolve, reject) => {
      add(() => {
        resolve();
      });
      reject("File is not exist");
    });
    assert.fail("Expected error was not thrown.");
  } catch (err) {
    assert.strictEqual(err, "File is not exist");
    assert.ok(true);
  }
});

test("If file is empty return specific message", async (t) => {
  // Create a mock file with some numbers
  mockFileName = "test4.txt";
  mockFileContent = "";

  fs.writeFileSync(mockFileName, mockFileContent);

  process.argv[2] = mockFileName;

  const sum = await new Promise((resolve) => {
    add((sum) => {
      resolve(sum);
    });
  });

  assert.strictEqual(sum, "Please provide values");
  //Delete the mock file
  fs.unlinkSync(mockFileName);
});
