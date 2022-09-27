import React from "react";

function Calculator(num1,num2,operand) {
    return operand(num1,num2);
}

function Add(num1,num2) {
  return num1 + num2;
}

function Multiply(num1,num2) {
  return num1 * num2;
}

function Subtract(num1,num2) {
  return num1 - num2;
}

function Divide(num1,num2) {
  return num1 / num2;
}
function Modulo(num1,num2) {
  return num1 % num2;
}

function Power(num1,num2) {
  return Math.pow(num1,num2);
}
export default Calculator;
export {Add, Multiply, Subtract, Divide, Modulo, Power};