// 최대 별 개수 상수
const maxStars = 10;

// 사용자 입력값을 저장할 변수
let input;

// 별 문자열을 저장할 변수
var stars;

// 유효한 입력을 받을 때까지 반복
while (true) {
  input = Number(prompt('Enter the number of stars (1-10):'));

  // 입력값 유효성 검사
  if (isNaN(input) || input < 1 || input > maxStars) {
    console.log('Invalid input! Enter a number between 1 and 10.');
    continue; // 유효하지 않은 입력이면 반복 계속
  }

  break; // 유효한 입력이면 반복 종료
}

// 함수 선언문 (기본값 설정: 입력값이 0 이하일 경우 기본값 1)
function printStars(count = 1) {
  stars = '';
  for (let i = 0; i < count; i++) {
    stars += '*';
  }
  console.log(stars);
}

// 입력값으로 별 출력 함수 호출
printStars(input);
