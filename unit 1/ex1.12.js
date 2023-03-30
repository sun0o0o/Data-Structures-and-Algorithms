// 객체는 생성자 함수를 이용해 정의한다.
//생성자 함수는 객체의 프로퍼티, 함수 선언, 함수 정의를 포함한다.

function Checking(amount) {
  this.balance = amount; //property
  this.deposit = deposit; // 함수
  this.withdraw = withdraw; //함수
  this.toString = toString; //함수
}

function deposit(amount) {
  this.balance += amount;
}

function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    console.log("Insufficient funds");
  }
}

function toString() {
  return "Balance: " + this.balance;
}

let account = new Checking(500);
account.deposit(1000);
console.log("after deposit", account.toString());
account.withdraw(750);
console.log("after withdraw", account.toString());
account.withdraw(800);
console.log("after withdraw2", account.toString());
