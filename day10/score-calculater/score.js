// score.js (도전 과제 버전)

const maxScore = 100;
let input = prompt("점수를 입력하세요.");
let score = Number(input); // 문자열을 숫자로 변환
var grade;

// 입력 유효성 검사 (isNaN, 논리연산자 사용)
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score! Please enter a number between 0 and 100.\n");
} else {
    // 단항 산술: 1점 증가
    score++;
    // 복합 대입: 10% 가산 (스케일링)
    score *= 1.1;
    // 5점 보너스 추가 (복합 대입)
    score += 5;

    // 보너스 점수와 스케일링 후 점수가 100을 초과하면 100으로 제한
    if (score > maxScore) {
        score = maxScore;
    }

    let finalScore = Math.round(score); // 소수점 방지, 정수로 출력

    // 등급 부여 (if-else if-else)
    if (finalScore >= 100) {
        grade = "S";
    } else if (finalScore >= 90) {
        grade = "A";
    } else if (finalScore >= 80) {
        grade = "B";
    } else if (finalScore >= 70) {
        grade = "C";
    } else if (finalScore >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 합격/불합격: 삼항 연산자
    let status = finalScore >= 60 ? "Pass" : "Fail";

    // 등급별 메시지 (switch + 100점 특수 케이스)
    let message;
    switch (true) {
        case (finalScore === 100):
            message = "Perfect Score!";
            break;
        case (grade === "S"):
            message = "Super!!";
            break;
        case (grade === "A"):
            message = "Excellent work!";
            break;
        case (grade === "B"):
            message = "Good job!";
            break;
        case (grade === "C"):
            message = "Satisfactory performance.";
            break;
        case (grade === "D"):
            message = "Needs improvement.";
            break;
        case (grade === "F"):
            message = "Please try harder!";
            break;
        default:
            message = "";
    }

    // 콘솔 출력
    console.log(`Final Score: ${finalScore}`);
    console.log(`Grade: ${grade}`);
    console.log(`Status: ${status}`);
    console.log(`Message: ${message}\n`);
}
