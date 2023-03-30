// List class 구현

function List() {
  this.listSize = 0;
  this.pos = 0; //현제 위치
  this.dataStore = []; //list 요소를 저장할 빈 배열 초기화
  this.clear = clear;
  this.find = find;
  this.toString = this.toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
}

//append 함수 구현
function append(element) {
  this.dataStore[this.listSize++] = element;
}
// 요소를 추가한 다음 listSize를 1만큼 증가시킨다.

//remove 함수 구현

function find(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) return i;
  }
  return -1;
}
