// var num1 = window.prompt("Enter a number");
// var 
// var num2 = window.prompt("Enter another number");

// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// document.write(num1 + num2);






  
  
// accept the number from the user through prompt box  
const number1 = parseFloat(prompt ('Enter the first number: ')); 
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): '); 
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaration of the variable.  
  
// use if, elseif and else keyword to define the calculator condition in JavaScript.  
if (operator == '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; // use / (division) operator to divide two numbers  
}  
  
// display the result of the Calculator  
window.alert(" Result is " + result);