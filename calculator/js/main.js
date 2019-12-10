const MULTIPLICATION = "x";
const DIVISION = "/";
const SUBTRACTION = "-";
const ADDITION = "+";
const EQUALS = "=";
const PERIOD = ".";
const PLUS_MINUS = "±";
const PARENS = "()";
const PERCENT = "%";

let displayValue = "";
let operand;
let firstvalue = 0;
let secondValue = 0;
let result = 0; 

function addNumber(key){
    if(displayValue == undefined){
        displayValue = key;
    }else{
        displayValue = displayValue + key.toString();
    }
    document.getElementById("result").value = displayValue;
}

function storeOp(op){
    console.log(op);
    operand = op;
    console.log(operand);
    firstvalue = parseInt(displayValue, 10);
    displayValue = "";
    document.getElementById("result").value = operand;
}

function operate(operator, number1, number2){
    console.log(operator + " " + number1 + " " + number2);
    switch(operator){
        case ADDITION:
            displayValue = add(number1, number2);
            break;
        case SUBTRACTION:
            displayValue = subtract(number1, number2);
            break;
        case MULTIPLICATION:
            displayValue = multiply(number1, number2);
            break;
        case DIVISION:
            displayValue = divide(number1, number2);
            break;
    }
    document.getElementById("result").value = displayValue;
}

function solve(){
    secondValue = parseInt(displayValue, 10);
    operate(operand, firstvalue, secondValue);
    firstvalue = 0;
    secondValue = 0;
}

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    if(number2 == 0){
        clearScreen();
        return "No dividing by zero!";
    }else{
        return number1 / number2;
    }
}


function clearScreen(){
    displayValue = "";
    firstvalue = 0;
    secondValue = 0;
    op = "";
    document.getElementById("result").value = displayValue;
}