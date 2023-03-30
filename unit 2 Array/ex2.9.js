// 연습문제
// 1. 객체에 학생들의 점수 집합을 저장하는 grades 객체를 만드시오.
//    점수를 추가하는 함수, 학생의 평균 점수를 출력하는 기능을 객체에 추가하시오.

let score = [32, 58, 90, 88, 78, 92, 69];
let grades = {};
// grades = {
//    stucdent1 : 32,
//    student2 : 58,
//    average : ??
//}
const addGrade = function () {
  for (let i = 0; i < score.length; i++) {
    grades[`student${i}`] = score[i];
  }
};

const getAverage = function () {
  let sum = score.reduce((acc, cur) => acc + cur);
  let average = (sum / score.length).toFixed(2);
  grades["average"] = Number(average);
};

addGrade();
getAverage();
console.log("최종 grades", grades);
grades = {};

// 2. 배열의 단어 집합을 저장한 다음 배열의 내용을 정방향 또는 역방향으로 출력하는 기능을 구현하시오.
const words = [
  "My",
  " ",
  "favorite",
  " ",
  "bag",
  "is",
  " ",
  "BEANPOLE",
  " ",
  "bag",
];

const forward = words.join("");
console.log(`forward: ${forward}`);
const reverse = words.reverse().join("");
console.log(`reverse: ${reverse}`);
// 3. 이차원 배열을 이용해 월간 온도 자료를 저장하도록 weeklyTemps 객체를 고치시오.
//    월간 평균, 지정한 주의 평균, 모든 주의 평균을 출력하는 함수를 만드시오.
// 문제가 이해가 안됌..
