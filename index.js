let operator = "";
let firstNumber = "";
let secondNumber = "";

function append(number) {
    if (operator === "") {
        firstNumber += number;
        document.getElementById("result").value = firstNumber;
    } else {
        secondNumber += number;
        document.getElementById("result").value = secondNumber;
    }
}

function set(op) {
    if (firstNumber !== "") {
        operator = op;
    }
}

function showResult() {
    if (firstNumber === "" || operator === "" || secondNumber === "") {
        document.getElementById("result").value = "Error";
        return;
    }
    let res = 0;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num2 !== 0 ? num1 / num2 : "Error";
            break;
        default:
            res = "Error";
    }

    document.getElementById("result").value = res;
    firstNumber = res.toString();
    secondNumber = "";
    operator = "";
}

function reset() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    document.getElementById("result").value = "";
}
