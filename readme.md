---Edge cases---

What happens if the file doesn't exist?
Throws an error to capture in catch block, and if error message is defined then returns with error message.
What happens if the file isn't formatted correctly?
If newline is not in an appropriate format then returns "This line is not formatted correctly" message and continues to process, this feature depends on requirements.
What happens if the file is very big?
To reduce memory usage(RAM) it creates a readline interface to read the file in chunks

---Testing---
Have you covered both success and failure cases?
Yes, it has error capture functionality.
You can test your code in any way; you don't need to use a dependency +

---Architecture---
What are the files in your solution?
Could a developer look after "just one part" of the solution, away from the others?
There is probably a file for the business logic that adds the numbers
There is probably a file that takes in the numbers and runs the business logic

---Code quality---
Have you used the most up-to-date language features and syntax?
Most up-to-date language features and syntax have been used.

---Extensibility---
Does it look easy to take numbers from a database instead of a file?
Reading from db easier apporach to reduce errors and by directly fetching it from SQL/Non-SQL from defined fields.

You can use "npm run start" or node add.js numbers.txt to run this CLI script.
