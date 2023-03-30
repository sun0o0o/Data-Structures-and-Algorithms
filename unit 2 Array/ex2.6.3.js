// 들쭉날쭉한 배열
// 배열의 행이 포함하는 요소의 개수가 서로 다른 배열이다.
// 자바스크립트는 모든 행의 길이를 정확하게 알 수 있으므로 들쭉날쭉한 배열도 쉽게 처리할 수 있다.

//학생 점수의 갯수가 서로 다르다. 이때 각 학생의 평균 구하기
let grades = [
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99],
];
let total = 0;
let average = 0.0;
for (let row = 0; row < grades.length; ++row) {
  for (let col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    "Student " + parseInt(row + 1) + " average: " + average.toFixed(2)
  );
  total = 0;
  average = 0.0;
}
