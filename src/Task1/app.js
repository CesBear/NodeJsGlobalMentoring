const process = require("process");
const { stdin, stdout } = process;

stdin.addListener("data", (input) => {
  const reversedInput = input.reverse().toString().trim();
  stdout.write(`${reversedInput} \n`);
});