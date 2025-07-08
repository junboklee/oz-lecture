// =======================
// 개인 프로필 생성기 (profile.js)
// =======================

// 변수 선언 (var, let, const) + 다양한 데이터 타입
var myAge = 25;                  // number 타입 (var)
let myName = "Lee Junbok";        // string 타입 (let)
const isStudent = true;          // boolean 타입 (const)

// 이스케이프 문자, 문자열 연결
console.log("\n\t프로필 정보\n\t이름: " + myName + "\n\t나이: " + myAge + "\n\t학생 여부: " + isStudent);

// 배열 리터럴 선언 (최소 3개 요소)
let hobbies = ["reading", "coding", "cycling"];
console.log("My hobbies: " + hobbies.join(", "));

// 객체 리터럴 선언 (최소 3개 속성)
let myProfile = {
  name: myName,
  age: myAge,
  isStudent: isStudent
};
console.log("Profile object name: " + myProfile.name + ", age: " + myProfile.age + ", student: " + myProfile.isStudent);

// typeof 연산자 사용 (최소 2개)
console.log("typeof myAge:", typeof myAge);             // number
console.log("typeof hobbies:", typeof hobbies);         // object (배열도 object로 나옴)
console.log("typeof myProfile:", typeof myProfile);     // object

// =======================
// [도전 과제] null, undefined, 템플릿 문자열, 추가 데이터
// =======================

// null과 undefined 각각 변수에 할당
let nothing = null;
let notDefined;
console.log("typeof nothing:", typeof nothing);        // object (JS 특징)
console.log("typeof notDefined:", typeof notDefined);  // undefined
console.log("null === undefined:", null === undefined); // false

// 템플릿 문자열 사용
console.log(`\n[템플릿 문자열] 이름: ${myProfile.name}, 나이: ${myProfile.age}, 학생여부: ${myProfile.isStudent}`);

// 배열에 null 또는 undefined 포함, 각 요소 타입 출력
hobbies.push(null, undefined);
console.log("Hobbies with null/undefined:", hobbies.join(", "));
console.log("각 취미의 데이터 타입:");
console.log(
  hobbies.map(function(item, idx) {
    return `hobbies[${idx}] (${item}): ${typeof item}`;
  }).join("\n")
);

// 객체에 새로운 속성 추가 및 null 체크
myProfile.email = null;
console.log("이메일 값:", myProfile.email);
if (myProfile.email === null) {
  console.log("myProfile.email is null");
}

// Symbol, BigInt도 예시로 포함 (필수는 아님)
const mySymbol = Symbol("id");
const myBigInt = 9007199254740991n; // n붙이면 BigInt
console.log("typeof mySymbol:", typeof mySymbol);
console.log("typeof myBigInt:", typeof myBigInt);

// 출력 가독성을 위한 구분선
console.log("\n--- 모든 출력 완료 ---");
