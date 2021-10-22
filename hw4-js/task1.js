let input = "hello worldd";

function stringLength(input) {
  if (typeof input === "string") {    
    let output = input.split(" ").map((item) => `${item} ${item.length}`);
    return output;
  } else {
    return "its not a string";
  }
}

console.log(stringLength(input));
