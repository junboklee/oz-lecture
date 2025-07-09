const maxScore = 100;
let input = prompt("점수를 입력하세요.");
let score = Number(input);
var grade;

if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score! Please enter a number between 0 and 100. \n");
} else {
    score++;
    score *=1.1;
    score +=5;


    if (score > maxScore) {
        score = maxScore;
    }

    let finalScore = Math.round(score);

    if (finalScore >= 100) {
        grade = "S";
    } else if (finalScore >= 90) {
        grade = "A";
    } else if (finalScore >=80) {
        grade = "B";
    } else if (finalScore >=70) {
        grade = "C";
    } else if (finalScore >=60) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status = finalScore >= 60 ? "Pass" : "Fail";

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