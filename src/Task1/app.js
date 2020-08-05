const process = require("process");

process.stdin.addListener('data', (inputValue) => {  
  return process.stdout.write(inputValue.reverse().toString().trim() + '\n')
});