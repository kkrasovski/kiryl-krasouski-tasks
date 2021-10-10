let input = "hello worldd";

function stringLength() {
  if (typeof input === "string") {
    let inputArr = input.split(" ");
    let output = inputArr.map((item) => `${item} ${item.length}`);
    return output;
  } else {
    return "its not a string";
  }
}

console.log(stringLength(input));