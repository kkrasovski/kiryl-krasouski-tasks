let input = "aaaabbcdefffffffg";
// let input = "boopdedoop";
// let input = "helloookat";

function Duplicates(input) {

  if (typeof input === "string") {
    let outputArr = [];
    let bracketOpen = false;
    let inputArr = input.split("");
    let outputString;
      
    for (let i = 0; i < inputArr.length; i++) {
      if (
        inputArr[i] === inputArr[i - 1] &&
        inputArr[i] === inputArr[i - 2] &&
        bracketOpen === false
      ) {
        outputArr.push("[");
        bracketOpen = true;
      }
  
      if (inputArr[i] != inputArr[i + 1] && bracketOpen === true) {
        outputArr.push(inputArr[i]);
        outputArr.push("]");
        bracketOpen = false;
        continue;
      }
  
      outputArr.push(inputArr[i]);
    }
    outputString = outputArr.join('');
    return outputString;
  } else {
    outputString = "Please enter a valid string";
    return outputString;
  }  
}
console.log(Duplicates(input));




