// select all number
const numbers = document.querySelectorAll(".number");
// console.log(numbers);
const calculatorScreen = document.querySelector(".calc-screen-number");

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
let calculated = false;

const inputNumber = (number) => {
  // currentNumber = number;
  if (currentNumber === "0" || calculated === true){
    calculated = false;
    currentNumber = number;
  }else{
    currentNumber += number;
  }
}

numbers.forEach((number) =>{
  // console.log(number);
  number.addEventListener('click', (event) => {
    // console.log(`number pressed ${number}`);
    // console.log(event.target.value);
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const updateScreen = (number) => {
  calculatorScreen.value = number;
  // console.log(`prev number ${prevNumber}`);
  // console.log(`current number ${currentNumber}`);
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
    // console.log(calculationOperator);
  });
});

const inputOperator = (operator) =>{
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
  // console.log('equal')
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch(calculationOperator){
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case "%":
      result = parseFloat(prevNumber) % parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculated = true;
  calculationOperator = '';
}

const btnClear = document.querySelector(".all-clear");

btnClear.addEventListener('click', () =>{
  // console.log('clear clicked')
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () =>{
  currentNumber = '0';
  prevNumber = '';
  calculationOperator = '';
}

const decimal = document.querySelector('.desimal');

decimal.addEventListener('click', () =>{
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) =>{
  if(currentNumber.includes(".")){
    return
  }
  currentNumber += dot;
}

const del = document.querySelector(".delete");

del.addEventListener('click', () =>{
  if (currentNumber !== "0" && currentNumber.length !== 1 && calculated === false) {
    currentNumber = currentNumber.slice(0, currentNumber.length - 1);
  }else{
    currentNumber = '0';
  }
  updateScreen(currentNumber);
});