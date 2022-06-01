function Dictionary() {
  let item = {};
  this.clear = function () {
    item = {}
  }
  this.size = function () {
    return Object.keys(item).length;
  }
  this.has = function (key) {
    return item.hasOwnProperty(key)
  }
  this.set = function (key, value) {
    if(!this.has(key)) {
      item[key] = value
    }
  }
  this.get = function (key) {
    return item[key] ?? undefined
  }
  this.delete = function (key) {
    if(this.has(key)) {
      delete item[key]
      return true
    }
    return false
  }
  this.getItem = function() {
    return item;
  }
  this.values = function() {
    var values = [];
    for(let key in item) {
      if(this.has(key)) {
        values.push(item[key])
      }
    }
    return values
  }
  this.keys = function () {
    return Object.keys(item)
  }
}

let d = new Dictionary();
d.set('name', '賽車手');
d.set('name', '123');
d.set('gender', 'male');
console.log(d.size());
console.log(d.values());
console.log(d.getItem());
console.log(d.keys());
console.log(d.has('gender'));
console.log(d.get('gender'));
d.delete('gender');
console.log(d.getItem());
console.log(d.keys());
console.log(d.has('gender'));
console.log(d.get('gender'));
d.clear();
console.log(d.getItem());