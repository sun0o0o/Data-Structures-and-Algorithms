// 기본적으로 이차원 배열 요소는 2가지 주요 패턴으로 처리한다.
// 1. 배열의 열을 기준으로 요소 처리하기
// 2. 배열의 행을 기준으로 요소 처리하기

// 평균 구하기 (열 기준)
let grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];
let total = 0;
let average = 0.0;

for (let row = 0; row < grades.length; row++) {
  for (let col = 0; col < grades[row].length; col++) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    "Student " + parseInt(row + 1) + " average " + average.toFixed(2)
  );
  total = 0;
  average = 0.0;
}

// 평균 구하기 (행 기준)

for (let col = 0; col < grades.length; col++) {
  for (let row = 0; row < grades[col].length; row++) {
    total += grades[row][col];
  }
  average = total / grades[col].length;
  console.log("Test " + parseInt(col + 1) + " average" + average.toFixed(2));
  total = 0;
  average = 0.0;
}
