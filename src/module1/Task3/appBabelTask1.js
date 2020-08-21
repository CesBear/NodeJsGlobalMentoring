import process from 'process';

process.stdin.addListener('data', inputValue => process.stdout.write(inputValue.reverse().toString().trim() +'\n'));
