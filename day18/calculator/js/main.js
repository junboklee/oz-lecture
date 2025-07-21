import calculate from './index.js';
import { appendNumber, setOperator, subDisplay, VALID_NUMBERS, VALID_OPERATORS, history } from './index.js';
import { displayHistory as showHistory } from './index.js';

let input = "";
window.firstNumber = null;
window.operator = null;
window.currentInput = "";

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (VALID_NUMBERS.includes(key)) {
        input = appendNumber(key, input);
    }
    if (VALID_OPERATORS.includes(key)) {
        window.operator = setOperator(key, input);
        window.firstNumber = Number(input);
        input = "";
    }
    if (key === "Enter") {
        window.currentInput = input;
        calculate();
    }
    if (key === "Backspace") {
        input = subDisplay(input);
    }
});

window.appendNumber = (num) => { input = appendNumber(num, input); };
window.setOperator = (op) => { 
    window.operator = setOperator(op, input);
    window.firstNumber = Number(input);
    input = "";
};
window.calculate = () => { 
    window.currentInput = input; 
    calculate(); 
};
window.resetDisplay = () => { input = ""; document.getElementById("display").textContent = "0"; };
window.displayHistory = () => {
    const historyElement = document.getElementById("history");
    historyElement.classList.remove("d-none");
    historyElement.textContent = showHistory(history);
};
