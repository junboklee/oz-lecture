const VALID_NUMBERS = ["0","1","2","3","4","5","6","7","8","9"];
const VALID_OPERATORS = ["+","-","*","/","^"];

const resetDisplay = () => "";
const setDisplay = (text) => {
    document.getElementById("display").textContent = text || "0";
    return text;
};
const subDisplay = (currentInput) => {
    const updated = currentInput.slice(0, -1);
    setDisplay(updated);
    return updated;
};

const appendNumber = (number, currentInput) => {
    if (!VALID_NUMBERS.includes(number)) throw new Error("유효한 숫자를 입력하세요.");
    return setDisplay(currentInput + number);
};

const setOperator = (op, currentInput) => {
    if (!VALID_OPERATORS.includes(op)) throw new Error("유효한 연산자를 선택하세요.");
    if (!currentInput) throw new Error("숫자를 먼저 입력하세요.");
    return op;
};

export { resetDisplay, setDisplay, subDisplay, appendNumber, setOperator, VALID_NUMBERS, VALID_OPERATORS };
