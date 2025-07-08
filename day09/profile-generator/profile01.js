var myAge = 25;
let myName = "Lee Junbok"; 
const isStudent = true;

console.log("\n\t프로필 정보\n\t이름: " + myName + "\n\t나이: " + "\n\t학생 여부: " + isStudent);

let hobbies = ["readaing", "coding", "cying"];
console.log("My hobbies: " + hobbies.join(", "));

let myProfile = {
    name: myName,
    age: myAge,
    isStudent: isStudent
};

console.log("Profile object name: " + myProfile.name + ", age: " + myProfile.age + ", student: " + myProfile.isStudent);

console.log("typeof myAge:", typeof myAge);
console.log("typeof hobbis:", typeof hobbies);
console.log("typeof myprofile:", typeof myProfile);


let nothing = null;
let notDefined;
console.log("typeof nothing:", typeof nothing);
console.log("typeof notDefined:", typeof notDefined);
console.log("null === undefined:", null === undefined);

console.log(`\n[템플릿 물자열] 이름: ${myProfile.name}, 나이: ${myProfile.age}, 학생여부: ${myProfile.isStudent}`);

hobbies.push(null, undefined);
console.log("각 취미의 데이터 타입:");
console.log(
    hobbies.map(function(item, idx) {
        return `hobbies[${idx}] (${item}): ${typeof item}`;
    }).join("\n")
);

myProfile.email = null;
console.log("이메일 값:", myProfile.email);
if (myProfile.email === null) {
    console.log("myProfile.email is null");
}

const mySymbol = Symbol("id");
const myBigInt = 9007199254740991n;
console.log("typof mySymbol", typeof mySymbol);
console.log("typeof myBigInt:", typeof myBigInt);


console.log("\n--- 모든 출력 완료 ---");
