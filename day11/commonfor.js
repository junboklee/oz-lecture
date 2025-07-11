// 0부터 4까지 콘솔찍는 코드
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("//////////////////");

// 1부터 5까지 콘솔찍는 코드
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("//////////////////");

// 1부터 10까지 홀수만 찍는 코드
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}
console.log("//////////////////");

// 중첩반복문
for (let i = 0; i < 2; i++) {
  console.log(`i: ${i}`);
  for (let j = 0; j < 2; j++) {
    console.log(`j: ${j}`);
  }
}
console.log("//////////////////");

// for문 안에 들어가는 if문
// 1부터 10까지 짝수 찍기
// i는 반드시 0부터 시작해야함
for (let i = 0; i <= 10; i += 2) {
  if (i === 0) {
    continue;
  }
  console.log(i);
}
console.log("//////////////////");

// break문과 continue문
for (let i = 0; i < 10; i++) {
  console.log(i);
  // if (i === 5) break;
  if (i === 5) continue;
}
console.log("//////////////////");


// for문과 array(배열)
let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("//////////////////");

// for in 배열
for (idx in arr) {
  console.log(arr[idx]);
}
console.log("//////////////////");

// for in 배열
for (item of arr) {
  console.log(item);
}

// 구구단
// 함수 정의 - 함수 선언문
function gugudan3() {
  for (let i = 1; i <= 9; i++) {
    console.log(3 x ${i} = ${3 * i});
  }
}

// 함수 정의 - 함수 표현식
const gugudan4 = function () {
  for (let i = 1; i <= 9; i++) {
    console.log(4 x ${i} = ${4 * i});
  }
};

// 함수 정의 - 화살표 함수
const gugudan5 = () => {
  for (let i = 1; i <= 9; i++) {
    console.log(5 x ${i} = ${5 * i});
  }
};

// gugudan3(); // 함수 실행
// gugudan4(); // 함수 실행
// gugudan5(); // 함수 실행

// 함수 선언문
function gugudanDeclare(num) {
  for (let i = 1; i <= 9; i++) {
    console.log(${num} x ${i} = ${num * i});
  }
}
// gugudanDeclare(2); // 2단

// 2단 ~ 9단까지 출력하는 코드
// for (let i = 1; i < 9; i++) {
//   gugudanDeclare(i + 1);
// }

// 함수 표현식
const gugudanExpression = function (num) {
  for (let i = 1; i <= 9; i++) {
    console.log(${num} x ${i} = ${num * i});
  }
};
// gugudanExpression(2); // 2단

// 화살표 함수
const gugudanArrow = (num) => {
  for (let i = 1; i <= 9; i++) {
    console.log(${num} x ${i} = ${num * i});
  }
};
// gugudanArrow(2);

// 숫자 계산 함수
function sum(scores) {
  let sumVal = 0;
  for (const score of scores) {
    sumVal += score;
  }
  return sumVal;
}
let math = 70;
let english = 90;
let social = 80;
let music = 70;
let science = 85;
const scores = [math, english, social, music, science];

// 합계
const total = sum(scores);
// console.log(total);

function avg(num1 = 10, num2 = 20) {
  return (num1 + num2) / 2;
}
const average = avg();
function sumDeclare(num1, num2) {
  return num1 + num2;
}
const sumArrow = (num1, num2) => num1 + num2;

// const sumArrow = (num1, num2) => {
//     return num1 + num2
// }