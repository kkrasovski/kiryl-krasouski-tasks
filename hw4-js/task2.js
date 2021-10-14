let input = "Hippopotomonstrosesquippedaliophobia";

function lettersToNumbers(input = undefined) {
  if (input === undefined) {
    return "Error! Empty argument";
  } else if (input.length === 0) {
    return "Input string is empty!";
  } else if (!/^[a-zа-я]+$/i.test(input)) {
    return "Only alphbetic, pls!";
  } else {
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
    return outputArr.join(".");
  }
}

console.log(lettersToNumbers(input));
