import calculateOperation from './operations.js';
import { resetDisplay, setDisplay, subDisplay, appendNumber, setOperator, VALID_NUMBERS, VALID_OPERATORS } from './input.js';
import { showError } from './error.js';
import saveHistory, { displayHistory } from './history.js';

let history = []; // History for exponent operations and displaying records

export { calculateOperation, resetDisplay, setDisplay, subDisplay, appendNumber, setOperator, showError, saveHistory, displayHistory, VALID_NUMBERS, VALID_OPERATORS, history };

export default function calculate() {
    try {
        if (window.firstNumber === null || window.operator === null || !window.currentInput) {
            throw new Error("계산에 필요한 값이 부족합니다.");
        }
        const secondNumber = Number(window.currentInput);
        if (isNaN(secondNumber)) throw new Error("유효한 숫자를 입력하세요.");

        const result = calculateOperation(window.firstNumber, secondNumber, window.operator);
        saveHistory(window.firstNumber, window.operator, secondNumber, result, history);

        const resultElement = document.getElementById("result");
        resultElement.classList.remove("d-none", "alert-danger");
        resultElement.classList.add("alert-info");
        resultElement.textContent = `결과: ${result}`;

        window.currentInput = resetDisplay();
        window.firstNumber = null;
        window.operator = null;
    } catch (error) {
        showError(error.message);
    }
}

const functions = { calculateOperation, appendNumber, setOperator, showError, saveHistory, displayHistory };
for (const func in functions) {
    console.log(`Available function: ${func}`);
}
