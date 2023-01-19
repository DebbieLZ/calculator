//business function//
function add(number1, number2) {
  return number1 + number2;
}

function sub(number1, number2) {
  return number1 - number2;
}

function mult(number1, number2) {
  return number1 * number2;
}

function div(number1, number2) {
  return number1 / number2;
}
// window.alert("your addition is " + add(number1, number2));
// window.alert("your subtraction is " + sub(number1, number2));
// window.alert("your multiplication is " + mult(number1, number2));
// window.alert("your division is " + div(number1, number2));

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

// window.alert("your addition is " + add(number1, number2) + " " + "your subtraction is " + sub (number1,number2) + " " + "your multiplication is " + mult(number1, number2) + " "  + "your division is " + div(number1, number2));

window.alert(parseInt(number1) + "+" + parseInt(number2) + "=" + add(number1, number2) + parseInt(number1) + "-" + parseInt(number2) + "=" + sub(number1, number2) + parseInt(number1) + "*" + parseInt(number2) + "=" + mult(number1, number2) + parseInt(number1) + "/" + parseInt(number2) + "=" + div(number1, number2));
