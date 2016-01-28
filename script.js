var firstNumber = prompt("Enter the first number");
firstNumber = Number(firstNumber);
if (isNaN(firstNumber)) {
  alert("this is not a number")
}

var secondNumber = prompt("Enter the second number");
secondNumber = Number(secondNumber);
if (isNaN(secondNumber)) {
  alert("this is not a number")
}

var sum = firstNumber + secondNumber;
alert("Sum of the two number is \n "+sum);
