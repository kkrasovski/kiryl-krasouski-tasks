let input = "Hippopotomonstrosesquippedaliophobia";

function lettersToNumbers(input) {
  let inputString = input.toLowerCase();
  let arrFromString = inputString.split("");
  let clearArr = [];

  let outputArr = arrFromString.map((item, i) => {
    if (arrFromString.indexOf(item) == i) {
      clearArr.push(item);
      return clearArr.indexOf(item);
    } else {
      return clearArr.indexOf(item);
    }
  });
  return outputArr;
}

console.log(lettersToNumbers(input));
