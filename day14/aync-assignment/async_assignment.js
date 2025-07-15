// 상수 선언
const MAX_TIME = 10; // 최대 10초
const MIN_TIME = 1;  // 최소 1초

// DOM 요소 가져오기
const inputEl = document.getElementById("timerInput");
const btnStart = document.getElementById("startTimer");
const displayEl = document.getElementById("timerDisplay");

// 메시지 변수 (var 사용)
var timerMessage;

// 이벤트 리스너 등록
btnStart.addEventListener("click", function () {
  // 입력값 가져오기
  let userInput = Number(inputEl.value);

  // 입력 유효성 검사
  if (isNaN(userInput) || userInput < MIN_TIME || userInput > MAX_TIME) {
    displayEl.textContent = "유효한 숫자(1-10)를 입력하세요!";
    displayEl.classList.add("error");
    displayEl.classList.remove("success");
    return;
  }

  // 타이머 시작
  startTimer(userInput);
});

// 타이머 함수
function startTimer(seconds = 10) {
  let timerCount = seconds; // 남은 시간

  // 버튼 비활성화
  btnStart.disabled = true;
  displayEl.classList.remove("error");
  displayEl.classList.add("success");

  // setInterval로 1초마다 감소
  const timerId = setInterval(() => {
    timerMessage = `타이머: ${timerCount}초`;
    displayEl.textContent = timerMessage;
    timerCount--;

    // 종료 조건
    if (timerCount < 0) {
      clearInterval(timerId);
      displayEl.textContent = "타이머 종료!";
      btnStart.disabled = false; // 버튼 활성화
    }
  }, 1000);
}
