const process = require('process');

process.stdin.addListener('data', function (inputValue) {  
  return process.stdout.write(inputValue.reverse().toString().trim() + '\n')
});