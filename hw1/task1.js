let stdin = process.openStdin();
stdin.addListener("data", function(input) {
  let inputString = input.toString().trim()
  let reversedString = inputString.split('').reverse().join('');
  process.stdout.write(reversedString + "\n\n");
});
 