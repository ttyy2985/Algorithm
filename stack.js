// 後進先出
function Stack() {
  let items = [];
  this.push = function (element) {
    items.push(element);
  };
  this.pop = function () {
    return items.pop();
  };
  this.peek = function () {
    return items[items.length - 1];
  };
  this.isEmpty = function () {
    return items.length == 0;
  };
  this.clear = function () {
    items = [];
  };
  this.size = function () {
    return items.length;
  };
}


let s = new Stack()
s.push(1);
s.push(2);
console.log(s.size());
console.log(s.peek());
console.log(s.pop());
console.log(s.peek());
s.clear();
console.log(s.peek());
s.isEmpty();
console.log(s.size());