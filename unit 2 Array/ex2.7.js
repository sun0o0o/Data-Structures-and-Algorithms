//2.7 객체를 요소로 포함하는 배열
function Point(x, y) {
  this.x = x;
  this.y = y;
}

function displayPts(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].x + ", " + arr[i].y);
  }
}

let p1 = new Point(1, 2);
let p2 = new Point(3, 5);
let p3 = new Point(2, 8);
let p4 = new Point(4, 4);
let points = [p1, p2, p3, p4];
for (let i = 0; i < points.length; i++) {
  console.log(
    "Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y
  );
}

let p5 = new Point(12, -3);
points.push(p5);
console.log("After push: ");

displayPts(points);
points.shift();
console.log("After shift: ");
displayPts(points);
