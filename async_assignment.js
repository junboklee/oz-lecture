//상수 선언
const MAX_TIME = 10;
const MIN_TIME = 1;

const inputEl = document.getElementById("timerInput");
const btnStart = document.getElementById("startTimer");
const displayEl = document.getElementById("timerDisplay");

var timerMessage;

btnStart.addEventListener("click", function() {
    let userInput = Number(inputEl.value);

    if (isNaN(userInput) || userInput < MIN_TIME || userInput > MAX_TIME) {
        displayEl.textContent = "유효한 숫자(1-10)를 입력하세요!";
        displayEl.classList.add("error");
        displayEl.classList.remove("success");
        return;
    }

    startTimer(userInput);
});

function startTimer(seconds = 10) {
    let timerCount = seconds;

    btnStart.disabled = true;
    displayEl.classList.remove("error");
    displayEl.classList.add("success");

    const timerId = setInterval(() => {
        timerMessage = `타이머: ${timerCount}초`;
        displayEl.textContent = timerMessage;
        timerCount--;

        if (timerCount < 0) {
            clearInterval(timerId);
            displayEl.textContent = "타이머 종료!";
            btnStart.disabled = false;
        }
    }, 1000);
}